import React from "react";

const Slide = ({ img, id, slideBack, slideForeword }) => {
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full z-0">
      <img src={img} className="h-full rounded-xl z-0" />
      <div className="rounded-xl bg-gradient-to-r from-indigo-500 z-0">
        <div className="w-[30rem] rounded-xl flex items-center absolute left-0 bg-gradient-to-r from-black w-full h-full pl-4 pt-4 z-0">
          <div>
            <h2 className="text-2xl md:text-6xl sm:m-0 md:m-4">
              Affordable Price For Car Servicing
            </h2>
            <h3 className="sm:text-[10px] md:text-xl sm:m-0 md:m-4">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </h3>
            <div className="sm:m-0 md:m-4 md:flex">
              <div>
                <button className="btn btn-error m-2">Discover More</button>
              </div>
              <div>
                <button className="btn btn-outline btn-accent m-2">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-0 md:right-5 lg:right-5 bottom-0">
          <a
            href={`#slide${slideBack}`}
            className="btn sm:btn-sm md:btn-circle md:btn lg:btn lg:btn-circle btn-circle mr-4"
          >
            ❮
          </a>
          <a
            href={`#slide${slideForeword}`}
            className="btn sm:btn-sm md:btn-circle md:btn lg:btn lg:btn-circle btn-circle mr-4"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slide;
