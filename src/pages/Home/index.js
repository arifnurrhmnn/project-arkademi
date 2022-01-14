import { VDiscount, VTrending } from "assets";
import {
  CategoryList,
  CourseBusinessList,
  CourseCareerList,
  CourseFlashSaleList,
  CourseTrendingList,
  Hero,
  InstitutionList,
  PromoList,
  TestimonyList,
} from "components";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <CourseTrendingList
          icon="show"
          iconImg={VTrending}
          title="Trending"
          name="trending"
        />
        <CourseFlashSaleList
          icon="show"
          iconImg={VDiscount}
          title="Flash Sale"
          time="enable"
          name="flashSale"
        />
        <CategoryList />
        <PromoList />
        <InstitutionList />
        <CourseCareerList icon="hidden" title="Terbaru" name="trending" />
        <CourseBusinessList icon="hidden" title="Bisnis" name="business" />
        <CourseCareerList
          icon="hidden"
          title="Pengembangan Karir"
          name="career"
        />
      </div>
      <TestimonyList />
    </>
  );
};

export default Home;
