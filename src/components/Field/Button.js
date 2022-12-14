import { get } from "lodash";
import React from "react";
import { ReactSVG } from "react-svg";

import NormalLink from "../NormalLink";
import Spinner from "../Spinner";

import style from "./style.module.css";

const Button = (props) => {
  let {
    loading = false,
    color = "#02269E",
    className = "",
    submit = false,
    label = "",
    svgIcon = false,
    target = "_self",
    fetching = false,
    link = "",
    disabled = false,
    onClick = null,
    rectBtn = false,
    buttonType = false,
    icon_placement = "right",
    id,
  } = props;

  const btnTypes = {
    header_blue_btn: style.header_blue_btn,
    block_btn: style.block_btn,
    banner_btn: style.banner_btn,
    form_button: style.form_button,
    white_btn: style.white_btn,
    transparent_btn: style.transparent,
    icon_btn: style.icon_btn,
    cream_btn: style.cream_btn,
  };
  className = get(btnTypes, buttonType) + " " + className;

  const iconTag = svgIcon ? (
    <span
      className={`${
        icon_placement === "left" ? style.icon_left : style.icon_right
      }`}
    >
      <ReactSVG src={svgIcon} wrapper="span" />
    </span>
  ) : (
    ""
  );
  const labelTag = (
    <>
      {!fetching && svgIcon && icon_placement === "left" && iconTag}
      <span
        className={style.svg_label}
        dangerouslySetInnerHTML={{ __html: label }}
      ></span>
      {!fetching && svgIcon && icon_placement === "right" && iconTag}
    </>
  );
  if (fetching === true) {
    return (
      <div className={`${style.button}${className ? " " + className : ""}`}>
        <div className={style.fetching}>
          <Spinner color={color} />
        </div>
        {labelTag}
      </div>
    );
  }

  if (disabled === true || loading === true) {
    return (
      <div
        className={`${style.button}${className ? " " + className : ""} ${
          style.buttonDisabled
        }`}
      >
        {labelTag}
        {rectBtn !== false && <span className={rectBtn}></span>}
      </div>
    );
  }

  if (submit === true) {
    return (
      <button
        type="submit"
        className={`${style.button}${className ? " " + className : ""}`}
      >
        {labelTag}
        {rectBtn !== false && <span className={rectBtn}></span>}
      </button>
    );
  }

  if (onClick) {
    return (
      <a
        id={id}
        className={`${style.button}${className ? " " + className : ""}`}
        onClick={onClick}
        href={false}
      >
        {labelTag}
        {rectBtn !== false && <span className={rectBtn}></span>}
      </a>
    );
  }

  if (!link && !onClick) {
    return (
      <div className={`${style.button}${className ? " " + className : ""}`}>
        {labelTag}
        {rectBtn !== false && <span className={rectBtn}></span>}
      </div>
    );
  }

  return (
    <>
      <NormalLink
        link={link}
        className={`${style.button}${className ? " " + className : ""}`}
        onClick={onClick}
        target={target}
      >
        {labelTag}
        {rectBtn !== false && <span className={rectBtn}></span>}
      </NormalLink>
    </>
  );
};
export default Button;
