import React, { useContext } from "react";

import Media from "../../../components/Media";
import Button from "../../../components/Field/Button";

import style from "./style.module.css";
import { AppContext } from "../../../Contexts/AppContext";

const LeftRightBanner = ({
  title,
  text,
  image,
  onButtonClick,
  bg_color,
  button_type,
  button_label,
  button_url,
  icon = false,
  border_line = false,
}) => {
  const {
    appContext: { winHeight, height },
  } = useContext(AppContext);
  const colorClass = {
    green: style.greenBg,
    darkblue: style.blueBg,
    cali: style.cali,
    blue_hover: style.blue_hover,
  };
  return (
    <div className={`c`}>
      <div
        className={
          border_line === true
            ? `${style.banner} ${style.border_line}`
            : `${style.banner}`
        }
      >
        <div
          className={style.left_right_banner}
          style={{ minHeight: (winHeight - height) * (80 / 100) }}
        >
          <div className={style.gradient} />
          <div className={`${style.left} ${colorClass[bg_color]}`}>
            <div className={style.content_wrapper}>
              <div className={style.title}>{title}</div>
              <div className={style.text}>{text}</div>
              <div className={style.banner_btn}>
                {icon ? (
                  <Button
                    buttonType="icon_btn"
                    onClick={onButtonClick}
                    label={button_label}
                    link={button_url}
                    svgIcon={icon}
                    className={colorClass[button_type]}
                  />
                ) : (
                  <Button
                    onClick={onButtonClick}
                    buttonType="white_btn"
                    label={button_label}
                    link={button_url}
                    className={colorClass[button_type]}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={style.right}>
            <Media
              className={style.banner_image}
              src={image}
              size="920x600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftRightBanner;
