import { Coffee, Leaf, Truck } from "lucide-react";
const Features = () => {
  return (
    <div className="flex flex-col gap-8 bg-white py-20 lg:grid lg:grid-cols-3">
      <div className="flex flex-col items-center">
        <div className="border-dark-brown bg-light-brown inline-block rounded-full border-2 p-4">
          <Coffee className="text-dark-brown ms-2 h-20 w-20" />
        </div>
        <p className="mt-3 text-2xl">Locally Roasted</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-dark-brown bg-light-brown inline-block rounded-full border-2 p-4">
          <Leaf className="text-dark-brown ms-2 h-20 w-20" />
        </div>
        <p className="mt-3 text-2xl">Locally Sourced</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-dark-brown bg-light-brown inline-block rounded-full border-2 p-4">
          <Truck className="text-dark-brown ms-2 h-20 w-20" />
        </div>
        <p className="mt-3 text-2xl">Free Local Delivery</p>
      </div>
    </div>
  );
};

export default Features;
