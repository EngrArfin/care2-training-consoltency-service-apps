/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { TService } from "@/types";

interface ServicesCardProps {
  service: TService;
}

const ServicesCard = ({ service }: ServicesCardProps) => {
  const { _id, name, price, image, description } = service;

  return (
    <div className="card bg-white w-full max-w-sm shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 m-1 p-1 relative">
      <Link href={`/services/${_id}`}>
        <figure className="relative w-full h-56 overflow-hidden">
          <img
            src={image || "/default-profile.jpg"}
            alt={name}
            className="object-cover w-full h-full rounded-t-lg"
            width={320}
            height={160}
          />
        </figure>
      </Link>

      <div className="card-body p-2">
        <h2 className="text-lg font-medium text-gray-900 truncate">{name}</h2>
        <div className="flex items-center ">
          <p className="text-sm text-gray-700 mr-2">
            Price: <span className=" text-sm text-gray-900">{description}</span>
          </p>

          <div className="flex flex-col items-start">
            <p className="text-sm text-gray-600 line-through">{price}</p>
          </div>
        </div>
      </div>

      <div className="card-actions justify-center absolute bottom-4 w-full transition-opacity duration-300 ">
        <Link
          href={`/services/${_id}`}
          className="bg-blue-900 text-white py-2 px-8 rounded font-semibold hover:bg-blue-500 transition-transform duration-300 transform hover:scale-105"
        >
          Lern More
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
