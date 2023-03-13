import React from "react";
import { useEffect } from "react";
import { Parser } from "html-to-react";

import style from "./style.module.css";
import { useRef } from "react";
import { useCallback } from "react";

const TextEditor = React.forwardRef(({ text, plain }, ref) => {
  const textRef = useRef();
  useEffect(() => {
    const htmlToReactParser = new Parser();
    const ReactElement = htmlToReactParser.parse(text);
    textRef.current = ReactElement;
  }, []);

  useEffect(() => {
    // console.log("current -->", textRef?.current);
  }, [ref?.current]);

  return (
    <div className={plain ? style.plain : `c`}>
      <div className={plain ? undefined : style.section}>
        <div
          id="text-editor"
          className={style.text}
          // dangerouslySetInnerHTML={{ __html: text }}
        >
          {textRef.current ? <div ref={ref}> {textRef.current} </div> : null}
        </div>
      </div>
    </div>
  );
});
export default TextEditor;
