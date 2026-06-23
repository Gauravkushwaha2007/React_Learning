import { useState } from "react";
const CounterBUtton = ()=> {
    
    const [count, setCount] = useState(0)

    return (
        <>
        <button
          type="button"
          onClick={() => setCount((count) => count + 1)}
          className="bg-white px-3 py-1 rounded-md mt-2 text-green-950 text-xl border-[1px] text-shadow-red-600"
        >
          Count is <span className="text-xl text-purple-900"> {count} </span> 
        </button>
        </>          
    )
}

export default CounterBUtton;