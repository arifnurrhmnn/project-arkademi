import { IconStar, ImgThumnailCard } from "assets";
import React from "react";
import "./style.scss";

export default function CardItem({ discount, totalDiscount, originalPrice }) {
  return (
    <>
      <div className="card-banner">
        <div className="thumnail">
          <img src={ImgThumnailCard} alt="" srcSet="" />
        </div>
        <div className="card-body">
          <div className="category">Arkademi</div>
          <h4 className="title">Membuat Landing Page bagi Desainer Website</h4>
          <div className="rating">
            <IconStar /> 4.5 <span>{"(<" + 1000 + ")"}</span>
          </div>
          <div className="discount" discount={discount}>
            <span className="total-discount">{totalDiscount}</span>
            <span className="original-price">{originalPrice}</span>
          </div>
          <div className="price">Rp 280.000</div>
        </div>
      </div>
    </>
  );
}
