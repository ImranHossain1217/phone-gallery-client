import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const BookingModal = ({ modalPhone, setmodalPhone }) => {
  const { resellPrice, model } = modalPhone;

  const { user } = useContext(AuthContext);
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{model}</h3>
          <form action="" className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              disabled
              value={model}
              className="input w-full input-bordered "
            />
            <input
              type="text"
              disabled
              value={resellPrice}
              className="input w-full input-bordered "
            />
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              className="btn btn-primary w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
