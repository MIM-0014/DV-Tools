import { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const {
    name,
    description,
    price,
    period,
    tag,
    tagType,
    features,
    icon,
  } = product;

  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
  };

  return (
    <div className="card bg-white shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 relative">

      <div className="card-body">

        {/* 🔥 Badge TOP LEFT (DaisyUI) */}
        <div className="absolute top-3 left-3">
          <span className={`badge ${tagType || "badge-primary"}`}>
            {tag || "Popular"}
          </span>
        </div>

        {/* Icon */}
        <div className="text-5xl mt-6">{icon}</div>

        {/* Title */}
        <h2 className="card-title text-xl font-semibold mt-2">
          {name}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm">{description}</p>

        {/* Price */}
        <p className="text-2xl font-bold text-indigo-600">
          ${price}
          <span className="text-sm text-gray-400">/{period}</span>
        </p>

        {/* Features */}
        <ul className="space-y-1 text-sm text-gray-600">
          {features.map((feature, index) => (
            <li key={index}>✔ {feature}</li>
          ))}
        </ul>

        {/* Button */}
        <button
          onClick={handleAdd}
          disabled={added}
          className={`w-full mt-4 font-semibold py-2 rounded-full transition duration-300 shadow-md
            ${
              added
                ? "bg-green-500 text-white"
                : "bg-purple-600 hover:bg-purple-700 text-white"
            }
          `}
        >
          {added ? "Added To Cart ✔" : "Buy Now"}
        </button>

      </div>
    </div>
  );
};

export default ProductCard;