import { IconTime, VTrending } from "assets";
import CardItem from "components/CardItem";
import { SampleNextArrow, SamplePrevArrow } from "components/ReactSlick";
import React from "react";
import Slider from "react-slick";
import "./style.scss";

export default function CardList({ icon, title, time }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="card-list-wrapper">
        <div className="container">
          <h3 className="heading">
            <img src={icon} alt="" srcSet="" /> {title}
            <div className={`time ` + time}>
              Berakhir dalam{" "}
              <span>
                <IconTime /> 08 : 52 : 05
              </span>
            </div>
            <div className="view-more">Lihat Semua</div>
          </h3>
          <div className="card-list">
            <Slider {...settings} className="card-list">
              <CardItem totalDiscount="30%" originalPrice="Rp 320.000" />
              <CardItem />
              <CardItem totalDiscount="30%" originalPrice="Rp 320.000" />
              <CardItem />
              <CardItem />
              <CardItem />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
