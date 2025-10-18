import { useParams } from "react-router-dom";
import { Heart } from "lucide-react";
const Details = ({ products }) => {
  const { id } = useParams();
  const selectedItem = products?.find((item) => item.id === parseInt(id));
  console.log(selectedItem);
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-white p-5">
        <div className="grid h-full w-full grid-cols-2 overflow-hidden border border-black">
          <div
            style={{ backgroundImage: `url(${selectedItem?.image})` }}
            className="bg-cover bg-center"
          >
            {/* <img src={selectedItem?.image} alt="image" /> */}
            <img
              src={selectedItem?.image}
              alt={selectedItem?.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-full w-full flex-col border border-black p-10">
            <div className="flex items-center justify-between">
              <p className="text-dark-brown text-[35px]">
                {selectedItem?.name}
              </p>
              <p className="text-[24px]">${selectedItem?.price}</p>
            </div>
            <div className="mt-4 text-start">
              <p className="text-dark-brown text-[25px]">Details</p>
              <p className="mt-3 text-gray-600">{selectedItem?.longDesc}</p>
            </div>
            <div className="mx-auto mt-5 flex max-w-sm items-center justify-between">
              {selectedItem?.sizes?.map((size) => (
                <button
                  key={size}
                  className="bg-light-brown border-light-brown/10 m-2 rounded-2xl border-2 px-4 py-2 hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between gap-4">
              <button className="bg-dark-brown text-light-brown border-light-brown/10 hover:bg-light-brown hover:text-dark-brown m-2 w-full rounded-2xl border-2 px-4 py-2">
                Add to Cart
              </button>
              <Heart
                className={`h-8 w-8 cursor-pointer transition-all duration-200 hover:scale-160 ${selectedItem?.isFavorite ? "fill-red-700" : ""}`}
                onClick={() => toggleFavourite(selectedItem?.id)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
