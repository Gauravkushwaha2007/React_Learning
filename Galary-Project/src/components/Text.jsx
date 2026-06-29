import { useState, useEffect } from 'react'


const Test = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  
  const clicked = async ()=>{

    try{

      setLoading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const newdata = await res.json()
      setData(newdata);
    }
    catch(e){
      console.log(e);
    }
    finally{
      setLoading(false) 
    }
  }
  
  useEffect(()=>{
    try{
      setLoading(true)
      async function calling() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const newdata = await res.json()
        setData(newdata)
      }
      calling()
    }
    catch(e){
      console.log(e);
    }
    finally{
      setLoading(false)
    }
  },[])


  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  return (    
    <div className="min-h-screen p-10 bg-gradient-to-r from-pink-50 via-violet-100 to-pink-200">

      {data.slice(0,10).map((e)=>{
        return <div
          key={e.id}
          className="bg-white rounded-xl shadow-md p-5 mb-4"
          >
          <p className="text-sm text-gray-500">
            #{e.id}
          </p>

          <h2 className="text-xl font-bold mt-2">
            {e.title}
          </h2>

          <p className="text-gray-600 mt-3">
            {e.body}
          </p>
        </div>
      })}
      
      <button
        onClick={()=>{
          clicked()
        }}
        className="bg-pink-500 text-white font-bold px-5 py-3 rounded-xl"
      >
      {loading ? 'Loading...' : 'Get more' }
      </button>
        
    </div>
  )
}

export default Test  