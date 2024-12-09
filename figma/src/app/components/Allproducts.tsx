import React from "react";
import Image from "next/image";

function Allproducts() {
  // Dummy product data
  const products = [
    { id: 1, image: "/Parent.png", name: "The Dandy chair" },
    { id: 2, image: "/Parent (1).png", name: "Rustic Vase Set" },
    { id: 3, image: "/Parent (2).png", name: "The Silky Vase" },
    { id: 4, image: "/Photo.png", name: "The Lucy Lamp" },
    { id: 1, image: "/lamp.png", name: "The Dandy chair" },
    { id: 2, image: "/white.png", name: "Rustic Vase Set" },
    { id: 3, image:"/yellow.png", name: "The Silky Vase" },
    { id: 4, image: "/Parent (3).png", name: "The Lucy Lamp" },
    { id: 1, image: "/Parent.png", name: "The Dandy chair" },
    { id: 2, image: "/Parent (1).png", name: "Rustic Vase Set" },
    { id: 3, image: "/Parent (2).png", name: "The Silky Vase" },
    { id: 4, image: "/Photo.png", name: "The Lucy Lamp" },
  ];

  return (
    <>
      <div className="relative flex items-center justify-center w-full lg:w-[100%]">
        {/* Background Image */}
        <Image
          src="/sssc.png"
          alt="All Products"
          width={300}
          height={300}
          className="w-full h-auto object-cover rounded-md"
        />

        {/* Text Overlay */}
        <div className="absolute w-full h-full flex items-center justify-center">
          <span className="text-lg lg:text-2xl font-bold text-white lg:absolute lg:top-4 lg:left-4 lg:text-left text-center">
            All Products
          </span>
        </div>
      </div>

      <div className="pb-10 px-4 mx-9">
        <h1 className="text-2xl font-bold mb-2 text-start">Our Products</h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-md"
              />
              <h2 className="text-lg font-medium mt-2 text-center">{product.name}</h2>
            </div>
          ))}
           <div className="w-full flex justify-center items-center">
            <button className="px-10 mt-2 py-3 bg-[#2A254B] rounded-sm text-white text-sm">View Collection</button>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Allproducts;
