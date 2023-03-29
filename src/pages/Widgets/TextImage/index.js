import React, { useContext } from "react";
import { get } from "lodash";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";

import Media from "../../../components/Media";
import { Button } from "../../../components/Field";
import LazyLoad from "../../../components/Lazyload";

import style from "./style.module.css";
import { AppContext } from "../../../Contexts/AppContext";

const TextImage = ({ items = [], className = false }) => {
  const {
    appContext: { winWidth },
  } = useContext(AppContext);

  const colorClass = {
    red: style.redBg,
    white_border_hover: style.white_border_hover,
    blue_hover: style.blue_hover
  };

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
              items.map((item, i) => (
                <div
                  className={`text_img ${style.section} ${
                    winWidth >= 950 && get(item, "image_position") === "right"
                      ? `col_50_50 ${style.right_side}`
                      : `col_50_50`
                  }`}
                  key={`text_img_${i}`}
                >
                  {i + 1 !== items.length && (
                    <div className={`section_item_border_bottom`}></div>
                  )}
                  <div className={`section_border_middle`}></div>
                  <div className={style.left}>
                    <EqualHeightElement name="TextImageContent">
                      <div className={style.image}>
                        <div className={style.img_wrap}>
                          <div className={style.sizer} />
                          <Media src={item.image} size="608x472px" />
                        </div>
                      </div>
                    </EqualHeightElement>
                  </div>
                  <div className={`section_border_bottom`}></div>
                  <div
                    className={`${style.right} ${colorClass[item.bg_color]}`}
                  >
                    <EqualHeightElement name="TextImageContent">
                      <div className={`${style.abs} `}>
                        <LazyLoad
                          className={`${
                            className ? `${style[className]} ` : ""
                          }${style.content}`}
                        >
                          <div className={style.title}>{item.title}</div>
                          <div className={style.text}>{item.text}</div>
                          <div className={style.button}>
                            <Button
                              onClick={item.onButtonClick}
                              buttonType={
                                item.cream_btn === true ? "cream_btn" : ""
                              }
                              className={`${style.btn_padd} ${
                                colorClass[item.button_type]
                              }`}
                              label={item.button_label}
                              link={item.button_url}
                            />
                          </div>
                        </LazyLoad>
                      </div>
                    </EqualHeightElement>
                  </div>
                </div>
              ))}
          </LazyLoad>
        </div>
      </EqualHeight>
    </>
  );
};

export default TextImage;
