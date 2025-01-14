/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { TService } from "@/types";
import { getServices } from "@/services/getServices";
import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import HeaderTitle from "../Shared/HeaderTitle";

const ServicesData = () => {
  const [services, setServices] = useState<TService[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const fetchedServices = await getServices();
        setServices(fetchedServices);
      } catch (err) {
        setError("Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <span className="text-xl text-gray-500">Loading Products...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center py-8">
        <span className="text-xl text-red-500">{error}</span>
      </div>
    );
  }

  return (
    <section className=" py-5 px-5 mx-auto ">
      {" "}
      <HeaderTitle
        heading={"Our Services"}
        generalText={"Welcome to the our Services page for get best service."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-3">
        {services.length > 0 ? (
          services.map((service) => (
            <ServicesCard service={service} key={service._id} />
          ))
        ) : (
          <div className="col-span-full text-center py-4 text-lg text-gray-500">
            No services available.
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesData;
