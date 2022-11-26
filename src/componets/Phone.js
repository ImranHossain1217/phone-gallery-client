import React from "react";

const Phone = ({ phone }) => {
  const { model, photo, resellPrice, orginalPrice, used, location } = phone;

  return (
    <div className="card card-compact mt-10 shadow-xl">
      <figure>
        <img src={photo} alt={model} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{model}</h2>
        <p className="font-semibold">Location: {location}</p>
        <p className="font-semibold">Resale Price: {orginalPrice} Taka</p>
        <p className="font-semibold">Orginal Price: {resellPrice} Taka</p>
        <p className="font-semibold">Used: {used} Year</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Phone;
