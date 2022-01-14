import { IconStar } from "assets";
import React from "react";
import "./style.scss";

const CourseItem = (data) => {
  const {
    courseTitle,
    instructorName,
    thumnail,
    averageRating,
    totalStudent,
    regularPrice,
    salePrice,
  } = data;
  let price = salePrice ? salePrice : regularPrice;
  let discount = ((regularPrice - price) / regularPrice) * 100;
  return (
    <>
      <div className="course-item">
        <div className="thumnail">
          <img src={thumnail} alt="" srcSet="" />
        </div>
        <div className="card-body">
          <div className="category">{instructorName}</div>
          <h4 className="title">{courseTitle.substr(0, 40)}...</h4>
          <div className="rating">
            <IconStar /> {averageRating}{" "}
            <span> {"(" + totalStudent + ")"}</span>
          </div>
          <div className="discount" discount="20%">
            <span className="total-discount">{discount.toFixed(0)}%</span>
            <span className="original-price">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              }).format(regularPrice)}
            </span>
          </div>
          <div className="price">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
            }).format(price)}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
