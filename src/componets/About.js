import React from "react";

const About = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl text-center font-bold mb-5 uppercase">
        About Us
      </h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://deshiz.com/wp-content/uploads/2018/03/Online_Shops_To_Buy_Original_Mobile_Phone_In_Bangladesh.png"
            className="max-w-sm rounded-lg shadow-2xl md:w-1/2"
            alt=""
          />
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold">
              The Power to Endure Any Adventure
            </h1>
            <p className="py-6">
              Phone Gallery is the most premium & multi-branded omnichannel
              retail in Bangladesh. The journey started with a single outlet in
              the year 2011, and now in a 10-years timeframe, there are 23
              premium outlets of G&G, all over Dhaka City. It's a renowned name
              to all, for their authenticity & top-notch quality. In 2017,
              Gadget & Gear started working as Apple Authorised Reseller.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
