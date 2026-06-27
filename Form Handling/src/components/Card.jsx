const Card = ({ idx, name, text, date, deleteNote, editNote}) => {

  return (
    <div className="relative bg-yellow-100 rounded-xl shadow-lg p-5 rotate-[0.5deg] hover:rotate-0 hover:scale-[1.02] transition-all duration-300 border border-yellow-200 overflow-hidden">

      {/* Tape */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-yellow-300/70 rotate-6 rounded-sm"></div>

      {/* Folded corner */}
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-yellow-200 rounded-tr-xl"></div>

      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            {name}
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            {date}
          </p>
        </div>

        <span className="bg-amber-300 text-amber-900 px-3 py-1 rounded-full text-xs font-semibold">
          Note
        </span>
      </div>

      <hr className="my-4 border-yellow-300" />

      <p className="text-gray-700 leading-7 min-h-[130px] break-words">
        {text}
      </p>

      <div className="flex justify-end gap-3 mt-5">
        <button onClick={()=>{editNote(idx)}} className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 font-semibold transition">
          Edit
        </button>

        <button
          onClick={()=>{
            deleteNote(idx)
          }}
          className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition">
            Delete
        </button>
      </div>
    </div>
  );
};

export default Card;