import { useState, useEffect } from "react"
import {Camera} from "lucide-react"

const App = () => {
  const [data, setData] = useState([]);
  const [indexPage, setIndexPage ] = useState(1);
  const [isLoading, setIsLoading ] = useState(false)
  const [inputValue, setInputValue ] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://picsum.photos/v2/list?page=${indexPage}&limit=30`);
        const data = await res.json();
        setData(data);
      }

      catch (e) {
        console.log(e);
      }
      
      finally {
        setIsLoading(false);
      }
    };

    fetchData();

  }, [indexPage]);

  // if(isLoading){
  //     return(
  //         <div className="h-screen flex justify-center items-center">
  //             <h1 className="text-4xl font-bold animate-pulse">
  //                 Loading...
  //             </h1>
  //         </div>
  //     )
  // }

return (
  <div className="min-h-screen bg-gradient-to-br from-violet-100 via-fuchsia-100 to-pink-100 p-8">
    <h1 className="flex justify-center items-center gap-3 text-4xl font-bold text-pink-700 mb-10">
        <Camera size={38}/>
        Picsum Gallery
    </h1>
    <input
      onChange={(e)=>{
        setInputValue(e.target.value)
      }}
      value={inputValue}
      type="search"
      className="border border-pink-700 rounded-md px-4 py-2 w-full text-pink-900 font-bold bg-pink-50 outline-none mb-5"
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data.filter((e)=>{
        return e.author.toLowerCase().includes(inputValue.toLowerCase())
      })
      .map((e, idx) => (
        <div
          key={e.id}
          className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <img
            src={`https://picsum.photos/id/${e.id}/500/350`}
            alt={e.author}
            className="w-full h-56 object-cover"
          />

          <div className="p-5">
            <span className="inline-block bg-violet-100 text-pink-700 text-xs font-semibold px-3 py-1 rounded-full">
              Image #{idx + 1}
            </span>

            <h2 className="mt-4 text-xl font-bold text-gray-800 truncate">
              {e.author}
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              Photo ID: {e.id}
            </p>

            <a
              href={e.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block w-full text-center bg-pink-600 text-white py-2 rounded-xl hover:bg-violet-700 transition"
            >
              View Original
            </a>
          </div>
        </div>
      ))}
    </div>
    
    <div className="flex justify-center items-center mt-5">
      <div className="flex flex-wrap gap-6">
        <button 
        onClick={()=>{
          if(indexPage === 1){return}
          setIndexPage(prev=> prev-1)
        }} 
        className="bg-pink-700 text-sm font-bold rounded-md px-6 py-2 text-white active:scale-95">Prev</button>
        <h2 className="text-xl text-gray-700 font-bold mt-1">{indexPage}</h2>
        <button onClick={()=>{setIndexPage(prev=> prev+1)}} className="border-2 border-pink-700 px-4 py-2 rounded-md active:scale-95 font-bold text-sm text-gray-800">Next ▶</button>
      </div>
    </div>
  </div>
);
}

export default App