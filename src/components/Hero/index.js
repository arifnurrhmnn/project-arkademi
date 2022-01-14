import React from "react";
import {
  ImgBanner,
  ImgBannerMobile,
  ImgThumnailBanner1,
  ImgThumnailBanner2,
  ImgThumnailBanner3,
} from "assets";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

const Hero = () => {
  return (
    <>
      <div className="hero-wrapper container">
        <div className="banner">
          <Swiper
            className="banner-list"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="banner-item">
              <img src={ImgBanner} alt="" srcSet="" className="img desktop" />
              <img
                src={ImgBannerMobile}
                alt=""
                srcSet=""
                className="img mobile"
              />
            </SwiperSlide>
            <SwiperSlide className="banner-item">
              <img src={ImgBanner} alt="" srcSet="" className="img desktop" />
              <img
                src={ImgBannerMobile}
                alt=""
                srcSet=""
                className="img mobile"
              />
            </SwiperSlide>
            <SwiperSlide className="banner-item">
              <img src={ImgBanner} alt="" srcSet="" className="img desktop" />
              <img
                src={ImgBannerMobile}
                alt=""
                srcSet=""
                className="img mobile"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="widget-banner">
          <Swiper
            className="widget-list"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={22}
            slidesPerView={`auto`}
            navigation
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="widget-item">
              <img src={ImgThumnailBanner1} alt="" srcSet="" className="img" />
            </SwiperSlide>
            <SwiperSlide className="widget-item">
              <img src={ImgThumnailBanner2} alt="" srcSet="" className="img" />
            </SwiperSlide>
            <SwiperSlide className="widget-item">
              <img src={ImgThumnailBanner3} alt="" srcSet="" className="img" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Hero;
