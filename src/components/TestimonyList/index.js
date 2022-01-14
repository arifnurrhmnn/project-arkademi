import { IconPetik, ImgAvatar1, ImgAvatar2, ImgAvatar3 } from "assets";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

const TestimonyList = () => {
  return (
    <>
      <div className="testimony-wrapper">
        <div className="tetimony container">
          <div className="h3 sub-headings">Testimoni</div>
          <div className="widget-testimony">
            <Swiper
              className="widget-list"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={33}
              slidesPerView={`auto`}
              navigation
              loop={true}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide className="widget-item">
                <div className="card-testimony">
                  <div className="content">
                    <IconPetik className="icon-petik" />
                    <div className="description">
                      Kursus online di Arkademi sangat berkesan, materinya
                      simple tidak berbelit-belit. Mudah dicerna bagi para
                      pemula seperti saya. Apalagi dengan sertifikat yang diberi
                      setelah lulus dalam kuis. Sukses terus buat Arkademi!
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
              </SwiperSlide>
              <SwiperSlide className="widget-item">
                <div className="card-testimony">
                  <div className="content">
                    <IconPetik className="icon-petik" />
                    <div className="description">
                      Materi kursus online di Arkademi sangat menarik, isinya
                      daging semua dan layak dipelajari. Pematerinya juga
                      berkompeten di bidangnya. Ditambah penyajian kelas sangat
                      ciamik dan user friendly. Solusi buat pebisnis.
                    </div>
                  </div>
                  <div className="user">
                    <img src={ImgAvatar2} alt="" srcSet="" className="avatar" />
                    <div className="user-data">
                      <div className="title">Fuad Hasan (Cilegon)</div>
                      <div className="sub-title">
                        Siswa kelas Inbound Marketing
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="widget-item">
                <div className="card-testimony">
                  <div className="content">
                    <IconPetik className="icon-petik" />
                    <div className="description">
                      Saya beruntung bergabung ke kursus online di Arkademi.
                      Metode penyampaian sangat jelas singkat dan memudahkan
                      belajar. Ditambah lagi tampilan presentasi yang membuat
                      kita tidak jenuh dalam belajar online.
                    </div>
                  </div>
                  <div className="user">
                    <img src={ImgAvatar3} alt="" srcSet="" className="avatar" />
                    <div className="user-data">
                      <div className="title">Dewi Wijayanti (Jakarta)</div>
                      <div className="sub-title">
                        Siswa kelas Brevet Pajak A/B
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonyList;
