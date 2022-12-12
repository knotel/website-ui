import React from "react";
import OutOfView from "../Lazyload/OutOfView";
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ className, children, swiperRef, autoplay = true }) => {
  const onOutHandler = (entry, observer) => {
    if (autoplay === true) {
      if (entry.isIntersecting) {
        swiperRef.current.swiper.autoplay.run();
      } else {
        swiperRef.current.swiper.autoplay.pause();
      }
    } else {
      observer.disconnect();
    }
  };

  return (
    <OutOfView className={className} onOutCallback={onOutHandler}>
      {children}
    </OutOfView>
  );
};

export default Slider;
