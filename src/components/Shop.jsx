import React from "react";
import { useEffect, useState } from "react";

const Shop = () => {
  const [shopData, setShopData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setShopData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto ">
        {shopData?.map((product) => (
          <div
            key={product.id}
            className="p-4 drop-shadow-md bg-white rounded-lg hover:drop-shadow-lg transition-shadow justify-between"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 sm:h-40 md:h-50 lg:h-75 object-cover mb-3 rounded-md"
            />
            <div className="flex flex-col justify-between">
              <h3 className="font-medium">{product.title}</h3>
              <div className="flex gap-2 mt-1 justify-between">
                <span className="font-bold">£{product.price}</span>
              </div>
              <button className="bg-primary text-white p-1 border rounded-md w-full hover:bg-emerald-900">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
