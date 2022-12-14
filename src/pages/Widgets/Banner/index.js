import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";

import Center from "../../../components/Center";
import LazyLoad from "../../../components/Lazyload";
import Media from "../../../components/Media";
import { AppContext } from "../../../Contexts/AppContext";

import style from "./style.module.css";

const Banner = ({ image, title, text, border_line = false, logo }) => {
  const {
    appContext: { winHeight, height },
  } = useContext(AppContext);
  return (
    <div className={`c`}>
      <div
        className={
          border_line === true
            ? `${style.outer} ${style.border_line}`
            : `${style.outer}`
        }
      >
        <div
          className={`${style.banner}`}
          style={{ minHeight: (winHeight - height) * (80 / 100) }}
        >
          <div className={style.gradient} />
          <Media src={image} size="2560x1124" /> 
          {title && (
            <>
              <div className={style.content}>
                <div className={style.title}>{title}</div>
                <div
                  className={style.text}
                  dangerouslySetInnerHTML={{ __html: text }}
                ></div>
              </div>
            </>
          )}

          {logo && (
            <>
              <Center className={style.banner_center}>
                <div className={style.center}>
                  <LazyLoad>
                    <div className={style.banner_logo}>
                      <img src={logo} alt="Knotel workclub" size="480x140" />
                    </div>
                  </LazyLoad>
                </div>
              </Center>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
