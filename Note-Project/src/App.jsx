import { useState, useEffect } from "react"
import Card from './components/Card'

const App = () => {

  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [task, setTask] = useState(()=>{
    const data = localStorage.getItem("task");
    return data ? JSON.parse(data) : [];
  });
  const [editingId, setEditingId] = useState(null);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState('')

  const submit = (e) =>{
    e.preventDefault()
    if(name.trim() === '' || text.trim() ===''){
      setToast('Please fill both fields')
      setTimeout(()=>{
        setToast('')
      }, 4000)
      return; 
    }
    editingId === null ? setTask((prev)=>[
      ...prev,
      { id: Date.now(),
        name,
        text,
        date: new Date().toLocaleString()
      }
      ]
    ) : 
    setTask((prev)=>
      prev.map((element)=>{
        if(element.id === editingId) {
          return {
            ...element,
            name, 
            text
          }
        }
        return element
      })
    )
  
    setName('')
    setText('')
    setEditingId(null)
    console.log('Submit/Update ho gya hai')
  }

  useEffect(() => {
    localStorage.setItem(
    "task",
    JSON.stringify(task),
  );
  }, [task])


  const deleteNote = (id) =>{
    const newTask = task.filter((element)=> {
      return element.id !== id;
    })
    setTask(newTask)
    // setTask((prev)=> prev.filter((element) => element.id !== id))
  }

  const editNote = (id) =>{
    task.find((e)=>{
      if( e.id === id ){
        setName(e.name)
        setText(e.text)
        setEditingId(id)
      }
    })
  }

return (
  <div className="min-h-screen bg-gradient-to-br from-slate-200 via-gray-100 to-green-50 p-6">
    {toast && (
      <div 
      className=" fixed top-5 right-5 bg-green-600 text-white font-semibold px-5 py-3 rounded-xl shadow-2xl animate-pulse z-50 "
      >
        {toast}
      </div>
    )}
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Form */}
      <div className="w-full lg:w-[350px] lg:sticky lg:top-6 h-fit">
        <form
          onSubmit={submit}
          className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-4"
        >
          <h1 className="text-3xl font-extrabold text-center text-green-950">
            📝 Notes
          </h1>

          <p className="text-center text-green-700 text-sm">
              Capture your ideas instantly
          </p>
          
          <input
          
            type="text"
            placeholder="Title here, "
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all focus:ring-1 focus:ring-green-600 focus:border-green-100"
          />

          <input
            type="text"
            placeholder="What's on your mind?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none transition-all focus:ring-1 focus:ring-green-700 focus:border-green-200"
            
          />

          <button
            id="btn"
            type="submit"
            className="bg-gradient-to-r from-green-500 to-green-700 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] active:scale-95 transition-all"
          >
            {editingId == null? 'Create Note': 'Update Note'}
          </button>
        </form>
      </div>

      {/* Cards */}
      <div className="flex-1">
        {/* Search */}
        <div className="mb-6">
          <input
            type="search"
            placeholder="Search notes... 🔍 "
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-xl px-5 py-3 shadow-md shadow-green-100 outline-none transition focus:ring-1 focus:ring-green-500 "
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {
            task.filter((e)=> {
              return e.name.toLowerCase().includes(search.toLowerCase()) || e.text.toLowerCase().includes(search.toLowerCase())
            })
            .map((e) => {
              return (
                <Card
                  id={e.id}
                  key={e.id}
                  name={e.name}
                  text={e.text}
                  date={e.date}
                  deleteNote={deleteNote}
                  editNote={editNote}
                  pined={false}
                />
              );
          })}
        </div>

      </div>

    </div>
  </div>
);
};

export default App;