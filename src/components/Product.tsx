"use client";
import { FC } from "react";

interface product {
  name: string;
  price: number;
  link: string;
  imageSrc: string;
}

const Product: FC<product> = ({ name, price, link, imageSrc }) => {
  return (
    <div className="w-80 z-10 bg-white shadow-lg group hover:scale-105 transition-all duration-300 ease-in-out my-4 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={imageSrc}
          alt="blog"
          className="w-full group-hover:grayscale-[0.3] transition duration-300 ease-in-out  max-h-lg object-center object-cover h-60"
        />
      </div>
      <div className="w-full px-4 py-6  monts ">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="py-4 text-gray-700">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
        <div className="flex justify-between font-semibold items-center">
          <p>&#8377; {price}</p>
          <button className="text-sm  bg-black rounded-lg text-white px-4 py-2 hover:bg-gray-700 hover:scale-105 transition-all ease-in-out duration-150">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
