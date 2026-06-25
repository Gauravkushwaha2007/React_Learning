import {Send} from 'lucide-react'
const Card = ({ image, title, id }) => {
  return (
    <div className="relative min-w-[250px] h-[500px] rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />

      <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold">
        {id+1}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad qui ullam.</p>
        <p className="mt-2 font-bold text-gray-300">{title}</p>

        <div className="flex justify-between items-center mt-4">
          <button className="bg-blue-600 px-4 py-2 rounded-full">
            Satisfied
          </button>

          <button className=" bg-blue-600 w-11 h-11 rounded-full flex items-center justify-center">
            <Send />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;