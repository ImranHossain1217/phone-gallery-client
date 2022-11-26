import React from "react";
import BookingModal from "./BookingModal";

const Phone = ({ phone,setModalPhone }) => {
  const { model, photo, resellPrice, orginalPrice, used, location,name } = phone;


  return (
    <div className="card card-compact mt-10 shadow-xl">
      <figure>
        <img src={photo} alt={model} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{model}</h2>
        <p className="text-primary text-lg font-bold">{name}</p>
        <p className="font-semibold">Location: {location}</p>
        <p className="font-semibold">Resale Price: {resellPrice} Taka</p>
        <p className="font-semibold">Orginal Price: {orginalPrice} Taka</p>
        <p className="font-semibold">Used: {used} Year</p>
        <div className="card-actions justify-start">
        <label onClick={()=>setModalPhone(phone)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
        </div>
      </div>
      {/* <BookingModal></BookingModal> */}
    </div>
  );
};

export default Phone;
