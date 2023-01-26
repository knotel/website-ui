import React, { useEffect, useRef, useState } from "react";
import { get } from "lodash";
import dynamic from "next/dynamic";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { Button } from "../../../components/Field";
import Media from "../../../components/Media";
import LazyLoad from "../../../components/Lazyload";
import Slider from "../../../components/Slider";

import style from "./style.module.css";

const sliderOptions = { arrows: false, pagination: false };

const TextImageSlider = ({
  items = [],
  autoHeight = false,
  delay = 10000,
  hideBorder = "",
}) => {
  const swiperRef = useRef(null);
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
            lazyLoadClass={`section_wrap text_img_slider`}
            animatedClass="animated"
            rootMargin="-20%"
          >
            {hideBorder === "top" ? (
              <></>
            ) : (
              <div className={`section_border_top`}></div>
            )}
            {hideBorder === "left" ? (
              <></>
            ) : (
              <div className={`section_border_left`}></div>
            )}
            {hideBorder === "right" ? (
              <></>
            ) : (
              <div className={`section_border_right`}></div>
            )}

            {hideBorder === "bottom" ? (
              <></>
            ) : (
              <div className={`section_border_bottom`}></div>
            )}
            {items &&
              items.length > 0 &&
              items.map((item, i) => {
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
                        <>
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
                        </>
                      ) : null}
                      <div className={`section_border_bottom`}></div>
                    </div>
                    <div className={style.right}>
                      <EqualHeightElement name="TextImageSliderContent">
                        <Slider className="text_slider" swiperRef={swiperRef}>
                          <Splide
                            options={sliderOptions}
                            ref={swiperRef}
                            onMoved={(e, prev) => setActive(prev)}
                            aria-label="My Favorite Images"
                          >
                            {item.list.map((item, i) => (
                              <SplideSlide key={item.image}>
                                <div className={style.img}>
                                  <div className={style.img_wrap}>
                                    <div className={style.sizer} />
                                    <Media src={item.image} />
                                  </div>
                                </div>
                                {/* <Media src={item.image} /> */}
                              </SplideSlide>
                            ))}
                          </Splide>
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
                                  swiperRef.current.splide.go(i);
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
