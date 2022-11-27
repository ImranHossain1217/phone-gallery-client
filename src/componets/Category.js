import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoryCard from "./CategoryCard";

const Category = () => {

  const {data:categories = []} = useQuery({
    queryKey:['category'],
    queryFn:()=> fetch("http://localhost:5000/category")
    .then(res => res.json())
  })

  return (
    <div className="my-10">
      <h2 className="text-3xl text-center font-bold text-primary uppercase">
        Our Category
      </h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
