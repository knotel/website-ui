import React from "react";

import style from "./style.module.css";


const TextEditor = React.forwardRef(({ text, plain }, ref) => {
  return (
    <div className={plain ? style.plain : `c`}>
      <div className={plain ? undefined : style.section}>
        <div
          id="text-editor"
          className={style.text}
          dangerouslySetInnerHTML={{ __html: text }}
        >
        </div>
      </div>
    </div>
  );
});
export default TextEditor;
