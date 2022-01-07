import React from "react";
import "./style.scss";

export default function ListPromo() {
  return (
    <>
      <div className="promo-wrapper">
        <div className="container">
          <h3 className="sub-heading">
            Promo Spesial Untukmu <div className="view-more">Lihat Semua</div>
          </h3>
          <div className="hello"></div>
          <div className="list-promo">
            <div className="card-promo one"></div>
            <div className="card-promo two"></div>
            <div className="card-promo three"></div>
          </div>
        </div>
      </div>
    </>
  );
}
