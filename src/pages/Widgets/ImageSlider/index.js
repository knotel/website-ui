import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "../../../components/Field";
import LazyLoad from "../../../components/Lazyload";
import Media from "../../../components/Media";
import NormalLink from "../../../components/NormalLink";
import Slider from "../../../components/Slider";

import style from "./style.module.css";

const swiperSlideClick = (swiper, items, action = "next") => {
  let nextSlide = swiper.activeIndex + 1;
  let prevSlide = swiper.activeIndex - 1;
  prevSlide = prevSlide > -1 ? prevSlide : 0;
  if (nextSlide >= items.length) {
    nextSlide = 0;
  }
  swiper.slideTo(action === "prev" ? prevSlide : nextSlide);
};

const ImageSlider = ({ id = "", options, items = [], autoplay = false }) => {
  const [country, setCountry] = useState(0);
  const swiperRef = useRef(null);

  const getItems = () => {
    if (!country || country === "all") return items;
    return items.filter(
      (i) => i.location.toLowerCase() === country.toLowerCase()
    );
  };
  return (
    <>
      <LazyLoad
        id={id || undefined}
        lazyLoadClass={`section_wrap has_border`}
        animatedClass="animated"
        rootMargin="-20%"
      >
        <div className={`section_border_top`}></div>
        <div className={`section_border_bottom`}></div>
        <div className={`c`}>
          <div className={`section_wrap`}>
            <div className={`section_border_left`}></div>
            <div className={`section_border_right`}></div>
            <div className={`slider_head ${style.slider_head}`}>
              <div className={style.location}>Locations</div>
              <div className={style.options}>
                {options.map((option, i) => (
                  <Button
                    className={`${
                      country === option.toLowerCase() ? `${style.active} ` : ""
                    }${style.option}`}
                    label={option}
                    key={`country_${i}`}
                    onClick={() => {
                      setCountry(option.toLowerCase());
                    }}
                  ></Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>
      <div className={`c`}>
        <Slider swiperRef={swiperRef} autoplay={autoplay}>
          <div className={style.slider}>
            <Swiper ref={swiperRef} spaceBetween={16} slidesPerView={3}>
              {getItems().map((item, i) => {
                return (
                  <SwiperSlide
                    className={`section_item ${style.item}`}
                    key={`location_${i}`}
                  >
                    <div className={style.item_content}>
                      <NormalLink link={item.link} />
                      <div className={style.item_bg}>
                        <div className={style.sizer} />
                        <Media
                          className={style.item_img}
                          src={item.image}
                          size="608x472"
                        />
                      </div>
                      <div className={style.text_wrap}>
                        <div className={style.place}>{item.title}</div>
                        <div className={style.view}>View Location</div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className={style.prev}>
              <NormalLink
                className={style.slider_icon}
                onClick={() =>
                  swiperSlideClick(swiperRef.current.swiper, items, "prev")
                }
              >
                <span className={style.icon}>
                  <i className="fas fa-arrow-left"></i>
                </span>
              </NormalLink>
            </div>
            <div className={style.next}>
              <NormalLink
                className={style.slider_icon}
                onClick={() =>
                  swiperSlideClick(swiperRef.current.swiper, items)
                }
              >
                <span className={style.icon}>
                  <i className="fas fa-arrow-right"></i>
                </span>
              </NormalLink>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ImageSlider;
