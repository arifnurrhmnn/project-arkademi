import { IconPetik, ImgAvatar1, ImgAvatar2, ImgAvatar3 } from "assets";
import React from "react";
import "./style.scss";

export default function ListTestimony() {
  return (
    <>
      <div className="testimony-wrapper">
        <div className="container">
          <div className="h3 sub-heading">Testimoni</div>
          <div className="list-testimony">
            <div className="card-testimony">
              <div className="content">
                <IconPetik className="icon-petik" />
                <div className="description">
                  Kursus online di Arkademi sangat berkesan, materinya simple
                  tidak berbelit-belit. Mudah dicerna bagi para pemula seperti
                  saya. Apalagi dengan sertifikat yang diberi setelah lulus
                  dalam kuis. Sukses terus buat Arkademi!
                </div>
              </div>
              <div className="user">
                <img src={ImgAvatar1} alt="" srcSet="" className="avatar" />
                <div className="user-data">
                  <div className="title">Nizar Putra (Bandung)</div>
                  <div className="sub-title">Siswa kelas Bootstrap</div>
                </div>
              </div>
            </div>
            <div className="card-testimony">
              <div className="content">
                <IconPetik className="icon-petik" />
                <div className="description">
                  Materi kursus online di Arkademi sangat menarik, isinya daging
                  semua dan layak dipelajari. Pematerinya juga berkompeten di
                  bidangnya. Ditambah penyajian kelas sangat ciamik dan user
                  friendly. Solusi buat pebisnis.
                </div>
              </div>
              <div className="user">
                <img src={ImgAvatar2} alt="" srcSet="" className="avatar" />
                <div className="user-data">
                  <div className="title">Fuad Hasan (Cilegon)</div>
                  <div className="sub-title">Siswa kelas Inbound Marketing</div>
                </div>
              </div>
            </div>
            <div className="card-testimony">
              <div className="content">
                <IconPetik className="icon-petik" />
                <div className="description">
                  Saya beruntung bergabung ke kursus online di Arkademi. Metode
                  penyampaian sangat jelas singkat dan memudahkan belajar.
                  Ditambah lagi tampilan presentasi yang membuat kita tidak
                  jenuh dalam belajar online.
                </div>
              </div>
              <div className="user">
                <img src={ImgAvatar3} alt="" srcSet="" className="avatar" />
                <div className="user-data">
                  <div className="title">Dewi Wijayanti (Jakarta)</div>
                  <div className="sub-title">Siswa kelas Brevet Pajak A/B</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
