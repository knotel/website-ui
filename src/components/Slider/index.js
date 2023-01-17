import React, { useEffect, useState } from "react";
import OutOfView from "../Lazyload/OutOfView";

const Slider = ({ className, children, swiperRef, autoplay = true }) => {
  const onOutHandler = (entry, observer) => {
    const Autoplay = swiperRef?.current?.splide?.Components?.Autoplay;
    if (autoplay === true) {
      if (entry.isIntersecting) {
        Autoplay?.play();
      } else {
        Autoplay?.pause();
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
