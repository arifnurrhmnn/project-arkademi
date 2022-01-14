import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

const PromoList = () => {
  return (
    <>
      <div className="promo-wrapper container">
        <h3 className="sub-heading">
          Promo Spesial Untukmu <div className="view-more">Lihat Semua</div>
        </h3>
        <div className="widget-promo">
          <Swiper
            className="widget-list"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={22}
            slidesPerView={`auto`}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="widget-item">
              <div className="card-promo one"></div>
            </SwiperSlide>
            <SwiperSlide className="widget-item">
              <div className="card-promo two"></div>
            </SwiperSlide>
            <SwiperSlide className="widget-item">
              <div className="card-promo three"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PromoList;
