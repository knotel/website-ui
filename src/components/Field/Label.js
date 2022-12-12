import React from "react";
import style from "./style.module.css";

const Label = ({ text, required, focus = false }) => {
  return (
    <div
      className={`${style.controlLabel}${
        focus === true ? " " + style.focus : ""
      }`}
    >
      <span dangerouslySetInnerHTML={{ __html: text }}></span>
      {required && <span className={style.required}>*</span>}
    </div>
  );
};
export default Label;
