import { useNavigate } from "react-router-dom"

const BackNavigate = () => {
  const navigate = useNavigate()
  return (
    <div>
        <button 
            onClick={
            ()=>{
                navigate(-1)
            }
            }
            className="px-4 py-2 border-2 mr-3 border-violet-800 rounded mt-3 active:scale-95 hover:text-xl transition-all duration-300 font-medium">
            Back
        </button>
        <button
            onClick={()=>{navigate('/')}}
            className="px-4 py-2 mr-3 bg-violet-700 text-white rounded mt-3 active:scale-95 hover:text-xl transition-all duration-300 font-medium">
            Go Home
        </button>
        <button
            onClick={
                ()=>navigate(1)
            }
            className="px-4 py-2 border-2 mr-3 border-violet-800 rounded mt-3 active:scale-95 hover:text-xl transition-all duration-300 font-medium">
            Next
        </button>
    </div>
  )
} 

export default BackNavigate