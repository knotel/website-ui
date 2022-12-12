import React from "react";

import LazyLoad from "../../../components/Lazyload";

import style from "./style.module.css";

const Features = ({ title, bg_color, items }) => {
  const colorClass = {
    red: style.redBg,
  };
  return (
    <>
      <div className={`c has_border features`}>
        <LazyLoad
          lazyLoadClass={`section_wrap col_20`}
          animatedClass="animated"
          rootMargin="-20%"
        >
          <div className={`section_border_top`}></div>
          <div className={`section_border_left`}></div>
          <div className={`section_border_right`}></div>
          <div className={`section_border_bottom`}></div>
          <div className={`section_border_middle`}></div>
          <div className={`section_border_middle_2`}></div>
          <div className={style.outer}>
            <div className={style.sec_padd}>
              <div className={`section_wrap`}>
                <div className={`section_border_top_full`}></div>
                <div className={`section_border_bottom`}></div>
                <div
                  className={`${colorClass[bg_color]} ${style.block_Center}`}
                >
                  <div className={style.title}>{title}</div>
                  <div className={style.content}>
                    {items.map((item, i) => (
                      <div key={`features_${i}`}>
                        <div className={style.text}>{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LazyLoad>
      </div>
    </>
  );
};

export default Features;
