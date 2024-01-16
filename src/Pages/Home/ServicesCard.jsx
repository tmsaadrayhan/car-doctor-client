import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="h-full card w-600 bg-base-100 shadow-xl backdrop-blur-md bg-white/40 rounded-xl">
        <figure>
          <img className="h-40" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="title-2xl font-bold">{title}</h2>
          <h2 className="title-xl font-bold">$ {price}</h2>
          <div className="card-actions justify-end">
            <Link to={`/book/${_id}`}>
              <button className="btn btn-sm btn-error">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
