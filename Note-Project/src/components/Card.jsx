const Card = ({ id, name, text, date, deleteNote, editNote }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

      <div className="bg-gradient-to-r from-green-50 to-green-100 px-5 py-4 text-green-950">
        <h2 className="text-xl font-bold truncate">
          {name}
        </h2>

        <p className="text-sm text-gray-800 mt-1">
          {date}
        </p>
      </div>

      {/* Body */}
      <div className="p-5">

        <p className="text-gray-700 leading-7 min-h-[120px] break-words">
          {text}
        </p>

        <div className="flex justify-between items-center mt-6">

          <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
            📝 Note
          </span>

          <div className="flex gap-2">

            <button
              onClick={() => editNote(id)}
              className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 font-semibold transition"
            >
              Edit
            </button>

            <button
              onClick={() => deleteNote(id)}
              className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold transition"
            >
              Delete
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Card;