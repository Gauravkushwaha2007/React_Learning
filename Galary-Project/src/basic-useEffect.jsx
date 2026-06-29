import { useState, useEffect } from "react"

const Haaa = () => {

  const [data, setData] = useState(0);
  const [data2, setData2] = useState(0);

  const btn1clicked = ()=>{
    setData(data + 1);
  }

  const btn2clicked = ()=>{
    setData2(data2+1)
  }

  useEffect(()=>{
    // page render par aur Btn1 par click karne par chalega qyoki data iski dependency h
    console.log('Button 1 par chalega')
  }, [data])

  useEffect(()=>{
    // page render par aur Button 2 par click krne par trigger hoga qyoki btn2 par click krne se data2 ka state chage ho rha aur data2 hi iski dependency h
    console.log('Btn2 par chalega')
  }, [data2])

  useEffect (()=>{
    // Sirf ek bar trigger hoga page Landing me qyoki empty dependency hai 
    console.log('Sirf ek hi bar chalega');
  }, [])

  useEffect (()=>{
    // Isme koi dependency nhi hai isliye har render par trigger hoga ye 
    console.log('Har bar chalega');
  })

  return (
    <div className="min-h-screen p-10 bg-gradient-to-r from-violet-50 to-violet-200">
      <button
        onClick={()=>{
          btn1clicked()
        }}
        className="bg-violet-950 text-white font-bold px-5 py-3 rounded"
      >
      Click
      </button>
      <h2>{data}</h2>

      <button
        onClick={()=>{
          btn2clicked()
        }}
        className="bg-violet-950 text-white font-bold px-5 py-3 rounded"
      >
      Click 2
      </button>
      <h3>{data2}</h3>
    </div>
  )
}

export default Haaa