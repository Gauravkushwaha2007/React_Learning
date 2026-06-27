const Card = ({name, text}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-bold text-gray-800">
           {name}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            27 June 2026
          </p>
        </div>

        <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
          Note
        </span>
      </div>

      <hr className="my-4" />

      <p className="text-gray-700 leading-relaxed">
       {text}
      </p>

      <div className="flex justify-end gap-2 mt-5">
        <button className="px-3 py-1 rounded-md bg-yellow-400 hover:bg-yellow-500 transition">
          Edit
        </button>

        <button className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;