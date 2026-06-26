import { useState } from "react"

const App = () => {

  const [arr , setArr] = useState({user:'Gaurav', items:4, likedItems:5});

  const changeUser = ()=>{
    console.log(arr);
    const newArr = {...arr};
    newArr.user = 'Ankita',
    newArr.items = 1,
    newArr.likedItems = 6
    setArr('newArr');
    console.log(arr)
  }


  const [count, setCount]= useState(0)
  
  const inscrease = ()=>{
    setCount(count+1)
  }
  const decrease = ()=>{
    setCount(count-1)
  }

  return (
    <div className="p-10 flex gap-4">
      <button onClick={decrease} className="border-1 rounded-md px-3 py-1 bg-violet-300 hover:scale-3d">-</button>
      <h2 className="text-2xl font-semibold">{count} </h2>
      <button onClick={inscrease} className="border-1 rounded-md px-3 py-1 bg-violet-300 hover:scale-3d font-bold text-2xl">+</button>
      
      
      <button onClick={changeUser} className="border-1 rounded-md px-3 py-1 bg-violet-300 hover:scale-3d font-bold text-2xl">Change User</button>
      <h3>{arr.user}</h3>
      <h4>Your items = {arr.items}</h4>
      <h4>Total Liked items = {arr.likedItems}</h4>
    </div>
  )
}

export default App  



// const App = () => {

// const obj1 = {
//   name: "Gaurav"
// };

// const obj2 = obj1;
// // console.log(obj2)
// obj2.name = 'Ankita'
// console.log(obj1)

//   return (

//     <div>App</div>
//   )
// }

// export default App