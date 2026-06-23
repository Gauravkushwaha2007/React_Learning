import { useState } from "react";
const CounterBUtton = ()=> {
    
    const [count, setCount] = useState(0)

    return (
        <>
        <button
          type="button"
          onClick={() => setCount((count) => count + 1)}
          className="bg-white px-3 py-1 rounded-md mt-2 text-xl border-1 border-violet-500 hover:scale-105 hover:shadow-xl hover:shadow-violet-300 shadow-md shadow-violet-200  transition-all duration-300 ease-in-out"
        >
          Count is <span className="text-xl text-purple-900"> {count} </span> 
        </button>
        </>          
    )
}

export default CounterBUtton;