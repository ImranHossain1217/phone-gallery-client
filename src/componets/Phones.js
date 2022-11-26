import React from "react";
import { useLoaderData } from "react-router-dom";
import Phone from "./Phone";

const Phones = () => {
  const phonesCategory = useLoaderData();
  const { phones } = phonesCategory;

  return (
    <div className="w-10/12 mx-auto my-10">
      <h2 className="text-3xl md:text-5xl text-primary font-bold text-center uppercase">
        Wellcome to {phonesCategory.category_name} World
      </h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {phones.map((phone, i) => (
          <Phone key={i} phone={phone}></Phone>
        ))}
      </div>
    </div>
  );
};

export default Phones;
