import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="relative flex flex-col items-center gap-8 overflow-hidden p-10 text-center">
        <div className="bg-dark-brown absolute top-0 right-0 h-64 w-64 translate-x-1/4 -translate-y-1/2 rounded-full opacity-30"></div>
        <div className="bg-coffee-brown absolute bottom-0 left-0 h-64 w-64 -translate-x-1/6 translate-y-1/4 rounded-full opacity-50"></div>
        <div></div>
        <div></div>
        <div className="font-poppins text-dark-brown text-[45px]">
          Fresh Coffee, Locally Roasted, Locally Sourced
        </div>
        <p className="font-semibold text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga aperiam
          asperiores assumenda.
        </p>
        <button className="hover:text-brown-700 hover:text-dark-brown rounded-full border px-5 py-2 transition duration-100 hover:scale-105 hover:bg-white">
          Explore Menu
        </button>
      </div>
    </>
  );
};

export default Hero;
