import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-p2jz.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  
  return (
    <div>
      <div className="flex justify-center text-center mt-8 backdrop-blur-md bg-white/40 rounded-xl py-8">
        <div>
          <h1 className="text-error font-bold">Service</h1>
          <h1 className="my-2 font-bold text-3xl">Our Service Area</h1>
          <div className="sm:w-[8rem] md:w-[32rem] font-bold p-3">
            <small>
              The majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </small>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
