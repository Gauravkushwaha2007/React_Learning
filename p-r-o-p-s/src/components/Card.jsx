import { Bookmark } from "lucide-react";

const Card = ({job}) => {
  return (
    <div className="w-72 bg-white rounded-2xl p-6 shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 hover:scale-105 transition-all duration-300">
      
      <div className="flex justify-between items-start">
        <img
          src={job.img}
          alt=""
          className="w-12 h-12 rounded-full border"
        />

        <button className="border px-2 py-1 rounded text-xs flex items-center gap-1 hover:text-[15px] hover:text-gray-600 transition-all duration-300 ">
          Save
          <Bookmark size={12} />
        </button>
      </div>

      <div className="mt-8">
        <p className="font-bold text-lg">
          {job.company} <span className="text-gray-400 text-sm">5 days ago</span>
        </p>

        <h2 className="text-3xl font-bold mt-1 ml-4 text-violet-950">
          {job.role}
        </h2>

        <div className="flex gap-2 mt-4">
          <span className="bg-gray-200 px-2 py-1 text-xs rounded">
            Part Time
          </span>

          <span className="bg-gray-200 px-2 py-1 text-xs rounded">
            Senior Level
          </span>
        </div>
      </div>

      <hr className="my-10" />

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{job.price}</h3>
          <p className="text-gray-500 text-sm">{job.location}</p>
        </div>

        <button className="bg-violet-950 cursor-pointer text-white px-4 py-2 rounded-lg hover:scale-105 transition-all ease-in-out duration-500 shadow-olive-50 hover:shadow-xl hover:shadow-olive-400">
          Apply Now
        </button>
      </div>

    </div>
  );
};

export default Card;