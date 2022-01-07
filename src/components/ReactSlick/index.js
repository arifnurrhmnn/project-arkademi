import { IconArrowLeft, IconArrowRight } from "assets";
import "./style.scss";

export const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} id="next-arrow" onClick={onClick}>
      <IconArrowRight />
    </div>
  );
};

export const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} id="prev-arrow" onClick={onClick}>
      <IconArrowLeft />
    </div>
  );
};

// export { SampleNextArrow, SamplePrevArrow };
