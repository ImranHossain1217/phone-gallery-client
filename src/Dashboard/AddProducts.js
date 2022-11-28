import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const {
        register,
        handleSubmit,
      } = useForm();
      const navigate = useNavigate();

      const handleAddProduct = data => {
        const products = {
            name:data.name,
            model:data.model,
            location:data.location,
            resellPrice:data.resalePrice,
            orginalPrice:data.orginalPrice,
            used:data.used,
            photo:data.photo
        };
        console.log(products)
        fetch('http://localhost:5000/products',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(products)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success("Add New Product Successfully.");
                navigate('/');
            }
        })
      }
    return (
        <div className='w-96 p-5'>
            <h2 className='text-3xl font-bold mb-5'>Add Your Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Model Name</span>
            </label>
            <input
              type="text"
              {...register("model", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              {...register("resalePrice", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Orginal Price</span>
            </label>
            <input
              type="text"
              {...register("orginalPrice", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Used Time</span>
            </label>
            <input
              type="text"
              {...register("used", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              {...register("photo", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
         
          <input
            className="btn btn-accent w-full mt-4"
            value="Add New Product"
            type="submit"
          />
        </form>
        </div>
    );
};

export default AddProducts;