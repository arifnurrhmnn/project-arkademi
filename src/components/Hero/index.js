import {
  ImgBanner,
  ImgThumnailBanner1,
  ImgThumnailBanner2,
  ImgThumnailBanner3,
} from "assets";
import { SampleNextArrow, SamplePrevArrow } from "components/ReactSlick";
import React from "react";
import Slider from "react-slick";
import "./style.scss";

export default function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="hero-wrapper">
        <div className="container">
          <div className="banner">
            <img src={ImgBanner} alt="" srcSet="" />
          </div>
        </div>
        <div className="container">
          <Slider {...settings} className="card-list">
            <div className="card-banner">
              <img src={ImgThumnailBanner1} alt="" srcSet="" />
            </div>
            <div className="card-banner">
              <img src={ImgThumnailBanner2} alt="" srcSet="" />
            </div>
            <div className="card-banner">
              <img src={ImgThumnailBanner3} alt="" srcSet="" />
            </div>
            <div className="card-banner">
              <img src={ImgThumnailBanner3} alt="" srcSet="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}
