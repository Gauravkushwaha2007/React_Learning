
const Card = ({name, age ,img}) => {
    // const {name, age} = props;
  return (<>
    <div className="w-72 rounded-md border-zinc-400 border-1 p-4 shadow-md shadow-violet-300 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-violet-400">
        <img className="w-20 h-20 mx-20 object-cover rounded-full border-2 border-violet-600" src={img} alt="" />
        <h2 className="text-pink-800"> {name}, <span className="text-purple-800 font-bold"> {age} </span> </h2>
        <p>Lorem ipsum dolor sequi quis atque amet, ipsam laboriosam vero minima cum officiis voluptatum omnis pariatur.</p>
    </div>
  </>
  )
}

export default Card