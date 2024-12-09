"use client";
import React from "react";
import Image from "next/image";
import { arr } from "../Product/Utils/Productdata"; // Make sure this path is correct
import { useRouter } from "next/navigation"; // Use correct Next.js navigation hook
import Allproducts from "./Allproducts";
import Link from "next/link";

const Ceramics = () => {
  const router = useRouter(); // Initialize the router

  const handleProductClick = (product: { title: string; image: string; price: string; id: number }) => {
    // Navigating to the detail page and passing parameters in the URL
    router.push(
      `/detail?title=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}`
    );
  };

  return (
    <div className="pb-10 px-4 mx-9">
      <h1 className="text-2xl font-bold mb-2 text-start">New Ceramics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {arr.map((product) => (
          <div
            key={product.id}
            className="bg-[#F5F5F5] p-6 flex flex-col items-center rounded-md shadow-sm cursor-pointer"
            onClick={() => handleProductClick(product)} // On product click, handle routing
          >
            <Image
              src={product.image}
              alt={product.title}
              width={600} // You can adjust the width/height if needed
              height={600}
              className="w-full h-auto object-contain" // Ensure responsiveness and proper image scaling
              priority={true} // Optional: priority loading of images for better UX
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm font-medium text-gray-500">{product.price}</p>
            </div>
          </div>
        ))}
        {/* View All Collection button */}
        <div className="w-full flex justify-center items-center px-5 py-3 mt-4  bg-indigo-800 text-white rounded-md font-medium hover:bg-indigo-700 transition-all">
         <Link href="/Collection"> View all Collection</Link> 
        {/* <button className="px-5 py-3 mt-4  bg-indigo-800 text-white rounded-md font-medium hover:bg-indigo-700 transition-all">
            <link rel="stylesheet" href="/Collection" />
           View all Collection
        </button>  */}
        </div>
      </div>
    </div>
  );
};

export default Ceramics;
