import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center gap-8">
        <p className="text-[40px]">
          Fresh Coffee, Locally Roasted, Locally Sourced
        </p>
        <p>Serving our community with love and care as well as premium beans</p>
        <button className="bg-button-bg hover:bg-light-brown inline max-w-sm rounded-xl p-4 text-center transition duration-75 ease-in">
          <Link to="/products">Shop Coffee</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
