import React from "react";

import Center from "../../../components/Center";
import LazyLoad from "../../../components/Lazyload";

import style from "./style.module.css";

const Text = ({ text, bg_color }) => {
  const colorClass = {
    red: style.redBg,
    green: style.greenBg,
    lightblue: style.lightBlueBg,
  };
  return (
    <>
      <div className={`c`}>
        <LazyLoad
          lazyLoadClass={`section_wrap`}
          animatedClass="animated"
          rootMargin="-20%"
        >
          <div className={`section_border_top`}></div>
          <div className={`section_border_left`}></div>
          <div className={`section_border_right`}></div>
          <div className={`${colorClass[bg_color]} ${style.section_border}`}>
            <Center className={style.block_Center}>
              <LazyLoad>
                <div
                  className={style.text}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </LazyLoad>
            </Center>
          </div>
        </LazyLoad>
      </div>
    </>
  );
};

export default Text;
