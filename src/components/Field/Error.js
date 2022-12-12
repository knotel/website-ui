import React from "react";
import style from "./style.module.css";

const Error = ({ meta: { error, touched }, servererror = [] }) => {
  return (
    <>
      {touched === true && typeof error === "string" && (
        <p
          className={style.helpBlock}
          dangerouslySetInnerHTML={{ __html: error }}
        ></p>
      )}
      {touched === true && !error && servererror.length > 0 && (
        <p
          className={style.helpBlock}
          dangerouslySetInnerHTML={{ __html: servererror.join(" ") }}
        ></p>
      )}
    </>
  );
};
export default Error;
