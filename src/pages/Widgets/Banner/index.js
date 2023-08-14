import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";

import Center from "../../../components/Center";
import LazyLoad from "../../../components/Lazyload";
import Media from "../../../components/Media";
import { AppContext } from "../../../Contexts/AppContext";

import style from "./style.module.css";

const Banner = ({
  image,
  tag = "div",
  title,
  text,
  border_line = false,
  logo,
  title_text,
}) => {
  const {
    appContext: { winHeight, height },
  } = useContext(AppContext);
  const Tag = tag;
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
          <Media src={image} size="2560x1124" alt="Banner" />
          {title && (
            <>
              <div className={style.content}>
                <Tag>
                  <span className={style.title}>{title}</span>
                </Tag>
                <div
                  className={style.text}
                  dangerouslySetInnerHTML={{ __html: text }}
                ></div>
              </div>
            </>
          )}

          {title_text && (
            <Center className={style.banner_center}>
              <div className={style.center}>
                <LazyLoad>
                  <div className={style.title}>{title}</div>
                  <div
                    className={`${style.title_text}`}
                    dangerouslySetInnerHTML={{ __html: title_text }}
                  />
                </LazyLoad>
              </div>
            </Center>
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
