import React, { useEffect, useRef, useState } from "react";
import { get } from "lodash";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EqualHeight, EqualHeightElement } from "react-equal-height";

import { Button } from "../../../components/Field";
import Media from "../../../components/Media";
import LazyLoad from "../../../components/Lazyload";
import Slider from "../../../components/Slider";

import style from "./style.module.css";

const TextImageSlider = ({ items = [], autoHeight = false, delay = 10000 }) => {
  const swiperRef = useRef(null);
  console.log;
  const colorClass = {
    green: style.greenBg,
    darkblue: style.blueBg,
  };
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) return;
    if (swiperRef?.current) {
      setReady(true);
    }
  }, [swiperRef?.current]);

  if (!items || items.length <= 0) {
    return null;
  }

  return (
    <>
      <EqualHeight>
        <div className={`c has_border`}>
          <LazyLoad
            lazyLoadClass={`section_wrap`}
            animatedClass="animated"
            rootMargin="-20%"
          >
            <div className={`section_border_top`}></div>
            <div className={`section_border_left`}></div>
            <div className={`section_border_right`}></div>
            <div className={`section_border_bottom`}></div>
            {items &&
              items.length > 0 &&
              items.map((item, i) => {
                console.log("text --->", item.text, item.title);
                return (
                  <div
                    className={`section_item ${style.text_image} ${
                      get(item, "image_position") === "left"
                        ? `col_66_33 ${style.left_side}`
                        : `col_33_66`
                    }`}
                    key={`text_img_${i}`}
                  >
                    {i + 1 !== items.length && (
                      <div className={`section_item_border_bottom`}></div>
                    )}
                    <div className={`section_border_middle`}></div>
                    <div
                      className={`${style.left} ${colorClass[item.bg_color]}`}
                    >
                      {ready ? (
                        <EqualHeightElement name="TextImageSliderContent">
                          <div className={style.abs}>
                            <LazyLoad className={style.content}>
                              <div className={style.title}>{item.title}</div>
                              <div className={style.text}>{item.text}</div>
                              <div className={style.button}>
                                <Button
                                  buttonType={
                                    item.white_button === true
                                      ? "transparent_btn"
                                      : ""
                                  }
                                  className={style.btn_padd}
                                  onClick={item.on_button_click}
                                  label={item.button_label}
                                  link={item.button_url}
                                />
                              </div>
                            </LazyLoad>
                          </div>
                        </EqualHeightElement>
                      ) : null}
                    </div>
                    <div className={style.right}>
                      <EqualHeightElement name="TextImageSliderContent">
                        <Slider className="text_slider" swiperRef={swiperRef}>
                          <Swiper
                            ref={swiperRef}
                            modules={[Pagination, Autoplay]}
                            autoplay={{ delay }}
                            pagination={false}
                            spaceBetween={0}
                            slidesPerView={1}
                            onSlideChange={(e) => setActive(e.activeIndex)}
                          >
                            {item.list.map((item, i) => (
                              <SwiperSlide key={`img_slider_${i}`}>
                                <div className={style.img}>
                                  <div className={style.img_wrap}>
                                    <div className={style.sizer} />
                                    <Media src={item.image} />
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </Slider>
                        <div className={style.bottom}>
                          <div className={style.caption}>
                            {item.caption || "Image caption goes here"}
                          </div>
                          <div className={style.icons}>
                            {item.list.map((item, i) => (
                              <div
                                className={`${style.icon}${
                                  active === i ? ` ${style.active}` : ""
                                }`}
                                key={i}
                                onClick={() => {
                                  swiperRef.current.swiper.slideTo(i);
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </EqualHeightElement>
                    </div>
                  </div>
                );
              })}
          </LazyLoad>
        </div>
      </EqualHeight>
    </>
  );
};

export default TextImageSlider;
