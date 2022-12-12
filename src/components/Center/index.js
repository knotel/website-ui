import React from "react";
import css from "./style.module.css";

const Center = ({ className = false, children, style = {} }) => {
  return (
    <div
      className={`${css.center}${className === false ? "" : " " + className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Center;
