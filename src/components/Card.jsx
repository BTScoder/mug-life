import { Plus, Heart } from "lucide-react";
const Card = ({
  image,
  altText,
  name,
  description,
  price,
  favorite,
  id,
  toggleFavourite,
}) => {
  return (
    <div className="bg-card-bg max-w-sm overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 hover:shadow-lg">
      {/* Image section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={altText}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <p className="bg-light-brown absolute top-5 left-5 z-100 inline rounded-xl p-2 text-black">
          Hot
        </p>
      </div>

      {/* Text section */}
      <div className="p-4">
        <h3 className="text-dark-brown my-5 text-[26px] font-light">{name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-gray-500">{description}</p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-dark-brown text-[26px] font-light">
            ${price}
          </span>
          <div className="flex items-center gap-6">
            <button className="bg-dark-brown/50 hover:bg-light-brown rounded-lg px-3 py-1">
              <Plus className="h-6 w-6 transition-transform duration-200 hover:scale-110 hover:rotate-210 hover:transform" />
            </button>
            <Heart
              className={`h-6 w-6 cursor-pointer transition-all duration-200 hover:scale-160 ${favorite ? "fill-red-700" : ""}`}
              onClick={() => toggleFavourite(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
