import Shirt1 from "../assets/shirt1.jpeg";
import Shirt2 from "../assets/shirt2.jpeg";
import photo from "../assets/photo.jpg"

export const Index = () => {
  return (
    <div className="w-full min-h-screen bg-blue-50 p-6">
      <h1 className=" font-bold text-xl text-center md:text-3xl md:mt-12 mb-4">
        Check out the <span className="text-red-500">new</span> collection of
        shirts
      </h1>

      <div className="flex flex-wrap justify-center">
        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="w-60 m-auto" src={photo} alt="" />
          <h2 className="text-center pb-5 px-2">New Shirt</h2>
          <button className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">
            Know More
          </button>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="w-60 m-auto" src={photo} alt="" />
          <h2 className="text-center pb-5 px-2">New Shirt</h2>
          <button className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">
            Know More
          </button>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="w-60 m-auto" src={Shirt1} alt="" />
          <h2 className="text-center pb-5 px-2">New Shirt</h2>
          <button className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">
            Know More
          </button>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="w-60 m-auto" src={Shirt2} alt="" />
          <h2 className="text-center pb-5 px-2">New Shirt</h2>
          <button className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">
            Know More
          </button>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="w-60 m-auto" src={Shirt1} alt="" />
          <h2 className="text-center pb-5 px-2">New Shirt</h2>
          <button className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">
            Know More
          </button>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="w-60 m-auto" src={Shirt2} alt="" />
          <h2 className="text-center pb-5 px-2">New Shirt</h2>
          <button className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">
            Know More
          </button>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="w-60 m-auto" src={Shirt1} alt="" />
          <h2 className="text-center pb-5 px-2">New Shirt</h2>
          <button className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">
            Know More
          </button>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">
          <img className="w-60 m-auto" src={Shirt2} alt="" />
          <h2 className="text-center pb-5 px-2">New Shirt</h2>
          <button className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};
