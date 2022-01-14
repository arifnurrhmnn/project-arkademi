import { IconTime } from "assets";
import { CourseItem } from "components";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCourseTrending } from "store/courseTrending/action";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

const CourseTrendingList = ({ icon, iconImg, title, time }) => {
  const {
    getCourseTrendingResult,
    getCourseTrendingLoading,
    getCourseTrendingError,
  } = useSelector((state) => state.courseTrending);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseTrending());
  }, [dispatch]);
  return (
    <>
      <div className="course-list-wrapper container">
        <h3 className="heading">
          <div className="title">
            <img src={iconImg} alt="" srcSet="" className={icon} />
            {title}
          </div>
          <div className={`time ` + time}>
            Berakhir dalam
            <span>
              <IconTime /> 08 : 52 : 05
            </span>
          </div>
          <div className="view-more">Lihat Semua</div>
        </h3>
        <div className="course-list">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={16}
            slidesPerView={`auto`}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {getCourseTrendingResult ? (
              getCourseTrendingResult.map((course) => {
                return (
                  <SwiperSlide className="slide-item" key={course.record_id}>
                    <CourseItem
                      courseId={course.course_id}
                      courseTitle={course.course_title}
                      instructorName={course.instructor_name}
                      thumnail={course.thumbnail}
                      averageRating={course.average_rating}
                      totalStudent={course.total_student}
                      regularPrice={course.regular_price}
                      salePrice={course.sale_price}
                    />
                  </SwiperSlide>
                );
              })
            ) : getCourseTrendingLoading ? (
              <p>Loading...</p>
            ) : (
              <p>
                {getCourseTrendingError
                  ? getCourseTrendingError
                  : "Data Kosong"}
              </p>
            )}

            {/* <SwiperSlide className="slide-item">
              <div className="card-more">more</div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CourseTrendingList;
