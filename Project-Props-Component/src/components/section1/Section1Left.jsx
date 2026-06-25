import {MoveUpRight} from 'lucide-react'
const LeftSection = () => {
  return (
    <div className="w-[35%] flex flex-col justify-center">
      <span className="bg-black text-white px-4 py-2 rounded-full w-fit text-sm">
        TARGET AUDIENCE
      </span>

      <h1 className="text-6xl font-bold mt-10 leading-tight">
        Prospective <br />
        customer <br />
        segmentation
      </h1>

      <p className="text-gray-500 mt-6 max-w-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis suscipit, modi porro inventore aspernatur quo nam sapiente dignissimos!
      </p>

      <button className="text-[6xl] mt-16 text-gray-900">

        <MoveUpRight size={100}/>
      </button>
    </div>
  );
};

export default LeftSection;