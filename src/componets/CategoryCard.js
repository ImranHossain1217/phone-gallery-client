import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { category_name, img , _id} = category;

  return (
    <div className="card shadow-xl">
      <figure>
        <img className="h-72" src={img} alt="category" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category_name}</h2>
        <div className="card-actions justify-end">
         <Link to={`category/${_id}`}> <button className="btn btn-primary w-full">Show Phones</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
