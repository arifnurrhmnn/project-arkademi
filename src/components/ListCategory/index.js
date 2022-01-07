import {
  VBahasa,
  VBisnis,
  VHobi,
  VKarir,
  VKeuangan,
  VSertifikasi,
  VTeknologi,
} from "assets";
import React from "react";
import "./style.scss";

export default function ListCategory() {
  return (
    <>
      <div className="category-wrapper">
        <div className="container">
          <h3 className="sub-heading">
            Kategori Terpopuler <div className="view-more">Lihat Semua</div>
          </h3>
          <div className="list-category">
            <div className="card-category">
              <img src={VBisnis} alt="" srcSet="" className="icon-category" />
              <div className="title">Bisnis</div>
            </div>
            <div className="card-category">
              <img src={VKeuangan} alt="" srcSet="" className="icon-category" />
              <div className="title">Keuangan</div>
            </div>
            <div className="card-category">
              <img src={VKarir} alt="" srcSet="" className="icon-category" />
              <div className="title">Pengembangan Karir</div>
            </div>
            <div className="card-category">
              <img
                src={VSertifikasi}
                alt=""
                srcSet=""
                className="icon-category"
              />
              <div className="title">Sertifikasi</div>
            </div>
            <div className="card-category">
              <img
                src={VTeknologi}
                alt=""
                srcSet=""
                className="icon-category"
              />
              <div className="title">Teknologi</div>
            </div>
            <div className="card-category">
              <img src={VHobi} alt="" srcSet="" className="icon-category" />
              <div className="title">Hobi</div>
            </div>
            <div className="card-category">
              <img src={VBahasa} alt="" srcSet="" className="icon-category" />
              <div className="title">Bahasa</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
