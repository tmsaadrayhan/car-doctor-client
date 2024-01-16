import React from "react";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";
import Slide from "./Slide";

const Banner = () => {
  return (
      <div className="carousel w-full h-auto z-0">
        <Slide img={img1} id={1} slideBack={6} slideForeword={2}></Slide>
        <Slide img={img2} id={2} slideBack={1} slideForeword={3}></Slide>
        <Slide img={img3} id={3} slideBack={2} slideForeword={4}></Slide>
        <Slide img={img4} id={4} slideBack={3} slideForeword={5}></Slide>
        <Slide img={img5} id={5} slideBack={4} slideForeword={6}></Slide>
        <Slide img={img6} id={6} slideBack={5} slideForeword={1}></Slide>
      </div>
  );
};

export default Banner;
