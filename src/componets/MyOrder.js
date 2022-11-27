import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from './Loading';

const MyOrder = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: Orders = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: () => fetch(url,{
        headers:{
            authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json()),
  });

  if(isLoading){
    return <Loading></Loading>
  };

  return (
    <div className="my-5">
      <h2 className="text-3xl md:text-5xl text-primary text-center mb-5 font-bold">
        My Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Number</th>
              <th>Phone Model</th>
              <th>Price</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {Orders.map((order, i) => (
              <tr key={i}>
                <th>{1 + i}</th>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{order.phoneModel}</td>
                <td>{order.phonePrice}</td>
                <td>{order.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
