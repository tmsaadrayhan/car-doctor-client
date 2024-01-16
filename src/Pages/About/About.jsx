import React from "react";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";
import Banner from "./Banner";

const About = () => {
  return (
    <div>
      <div className="rounded-xl hero min-h-screen backdrop-blur-sm bg-white/40 mt-6 z-0">
        <div className="hero-content flex-col lg:flex-row">
          <div className="sm:w-full md:w-3/5 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="p-2 bg-white absolute top-1/2 right-12 w-1/2 rounded-lg shadow-2xl"
            />
          </div>
          <div className="sm:w-full md:w-2/5">
            <h1 className="text-xl font-bold text-error my-2">About Us</h1>
            <h1 className="text-2xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <div className="pt-2">
              <small>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </small>
            </div>
            <div className="py-2">
              <small>
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.
              </small>
            </div>
            <button className="btn btn-error">Get More Info</button>
          </div>
        </div>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default About;
