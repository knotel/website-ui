import React, { useContext } from "react";

import Media from "../../../components/Media";
import Center from "../../../components/Center";
import Button from "../../../components/Field/Button";
import LazyLoad from "../../../components/Lazyload";

import style from "./style.module.css";
import { AppContext } from "../../../Contexts/AppContext";

const BannerHero = ({
  title,
  title_text,
  title_image,
  desktop_image,
  onButtonClick,
  button_label,
  button_url,
}) => {
  const {
    appContext: { winHeight, height },
  } = useContext(AppContext);

  return (
    <div className={`c`}>
      <LazyLoad
        lazyLoadClass={`${style.banner_hero}`}
        animatedClass={style.animated}
      >
        <div className={style.banner} style={{ minHeight: winHeight - height }}>
          <div className={style.gradient} />
          <Media
            className={`${style.banner_image} fixed`}
            src={desktop_image}
            size="2560x1124"
            alt="Hero Banner"
          />
          <Center className={style.banner_center}>
            <div className={style.center}>
              <LazyLoad>
                <div role="heading" className={style.title}>{title}</div>
                {title_text ? (
                  <div
                    className={`${style.title_text}`}
                    dangerouslySetInnerHTML={{ __html: title_text }}
                  />
                ) : (
                  <div className={style.banner_logo}>
                    <img
                      src={title_image}
                      alt="Knotel workclub"
                      size="480x140"
                    />
                  </div>
                )}
                <div className={style.button}>
                  <Button
                    buttonType="banner_btn"
                    onClick={onButtonClick}
                    label={button_label}
                    link={button_url}
                  />
                </div>
              </LazyLoad>
            </div>
          </Center>
        </div>
        <LazyLoad
          lazyLoadClass={style.banner_hero_after}
          animatedClass={style.animated}
          rootMargin="30%"
        ></LazyLoad>
      </LazyLoad>
    </div>
  );
};

export default BannerHero;
