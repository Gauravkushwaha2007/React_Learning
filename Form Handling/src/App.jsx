import { useState, useEffect } from "react"
import Card from './components/Card'

const App = () => {

  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [task, setTask] = useState(()=>{
    const data = localStorage.getItem("task");
    return data ? JSON.parse(data) : [];
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const submit = (e) =>{
    e.preventDefault()

    editingIndex === null ? setTask((prev)=>[
      ...prev,
      { 
        name,
        text,
        date: new Date().toLocaleString()
      }
      ]
    ) : 
    setTask((prev)=>
      prev.map((element,idx)=>{
        if(idx === editingIndex) {
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
    setEditingIndex(null)
    console.log('Submit/Update ho gya hai')
  }

  useEffect(() => {
    localStorage.setItem(
    "task",
    JSON.stringify(task),
  );
  }, [task])


  const deleteNote = (idx)=>{
    
    const newTask = task.filter((e, i)=> {
      return i !== idx;
    })
    setTask(newTask)
    // setTask((prev)=> prev.filter((e,i) => i!==idx))
  }

  const editNote = (idx) =>{
    console.log(task[idx]);
    setName(task[idx].name);
    setText(task[idx].text);
    setEditingIndex(idx);
    
  }


return (
  <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

      {/* Form */}
      <div className="w-full lg:w-[350px] lg:sticky lg:top-6 h-fit">
        <form
          onSubmit={submit}
          className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-4"
        >
          <h1 className="text-2xl font-bold text-center">
            Create Notes
          </h1>

          <input
            type="text"
            placeholder="Title here, "
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="What's on your mind?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            id="btn"
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {editingIndex == null? 'Submit': 'Update'}
          </button>
        </form>
      </div>

      {/* Cards */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {task.map((e,i)=>{
          return <Card
           key={i}
           idx={i} 
           name={e.name} 
           text={e.text} 
           date={e.date}
           deleteNote={deleteNote} 
           editNote={editNote}
           />
        })}
      </div>

    </div>
  </div>
);
};

export default App;