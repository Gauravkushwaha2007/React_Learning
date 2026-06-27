import { useState } from "react"
import Card from './components/Card'

const App = () => {

  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [task, setTask] = useState([]);

  

  const submit = (e) =>{
      e.preventDefault()
      setName('')
      setText('')
      setTask((prev)=>[
          ...prev,
          {
            name,
            text
          }
        ]
      )
      
    console.log('Submit to hua hai')
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
            placeholder="Your Name"
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
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Cards */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {task.map((e,i)=>{
          return <Card key={i} name={e.name} text={e.text} />
        })}
      </div>

    </div>
  </div>
);
};

export default App;