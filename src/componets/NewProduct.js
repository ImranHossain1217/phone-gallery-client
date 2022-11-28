import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookingModal from "./BookingModal";
import ProductCard from "./ProductCard";

const NewProduct = () => {
  const [modalPhone, setModalPhone] = useState(null);

  const { data: products = [] } = useQuery({
    queryKey: ["category"],
    queryFn: () =>
      fetch("http://localhost:5000/products").then((res) => res.json()),
  });
  return (
    <div className="my-10">
      <h2 className="text-3xl text-center font-bold text-primary uppercase">
        New Products
      </h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setModalPhone={setModalPhone}
          ></ProductCard>
        ))}
      </div>
      {modalPhone && (
        <BookingModal
          modalPhone={modalPhone}
          setModalPhone={setModalPhone}
        ></BookingModal>
      )}
    </div>
  );
};

export default NewProduct;
