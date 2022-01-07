import {
  ImgLembaga1,
  ImgLembaga10,
  ImgLembaga11,
  ImgLembaga12,
  ImgLembaga13,
  ImgLembaga14,
  ImgLembaga2,
  ImgLembaga3,
  ImgLembaga4,
  ImgLembaga5,
  ImgLembaga6,
  ImgLembaga7,
  ImgLembaga8,
  ImgLembaga9,
} from "assets";
import React from "react";
import "./style.scss";

export default function ListInstitution() {
  return (
    <>
      <div className="institution-wrapper">
        <div className="container">
          <h3 className="sub-heading">
            Lembaga <div className="view-more">Lihat Semua</div>
          </h3>
          <div className="list-institution">
            <div className="card-institution">
              <img src={ImgLembaga1} alt="" srcSet="" />
              <div className="title">MEDIA CIPTA PRESTASI</div>
            </div>
            <div className="card-institution">
              <img src={ImgLembaga2} alt="" srcSet="" />
              <div className="title">REWATA CONSULTANT</div>
            </div>
            <div className="card-institution">
              <img src={ImgLembaga3} alt="" srcSet="" />
              <div className="title">LKP DUTA</div>
            </div>
            <div className="card-institution">
              <img src={ImgLembaga4} alt="" srcSet="" />
              <div className="title">GADJAH MADA YOGYAKARTA</div>
            </div>
            <div className="card-institution">
              <img src={ImgLembaga5} alt="" srcSet="" />
              <div className="title">LPK GLOBAL BONTANG</div>
            </div>
            <div className="card-institution">
              <img src={ImgLembaga6} alt="" srcSet="" />
              <div className="title">BINURI LEARNING CENTER</div>
            </div>
            <div className="card-institution">
              <img src={ImgLembaga7} alt="" srcSet="" />
              <div className="title">SENJA HASTA AZIZAN</div>
            </div>
            <div className="card-institution">
              <img src={ImgLembaga8} alt="" srcSet="" />
              <div className="title">MITRA POLRI</div>
            </div>
            <div className="card-institution">
              <img src={ImgLembaga9} alt="" srcSet="" />
              <div className="title">SURYA COMPUTER</div>
            </div>
            <div className="card-institution">
              <img src={ImgLembaga10} alt="" srcSet="" />
              <div className="title">YES STUDY</div>
            </div>
            <div className="card-institution">
              <img src={ImgLembaga11} alt="" srcSet="" />
              <div className="title">SMART BRAIN</div>
            </div>
            <div className="card-institution">
              <img src={ImgLembaga12} alt="" srcSet="" />
              <div className="title">AVICENNA CIPTA TRAINING</div>
            </div>
            <div className="card-institution">
              <img src={ImgLembaga13} alt="" srcSet="" />
              <div className="title">LKP MSI</div>
            </div>
            <div className="card-institution">
              <img src={ImgLembaga14} alt="" srcSet="" />
              <div className="title">GLOBAL ANTUSIAS SEMESTA</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
