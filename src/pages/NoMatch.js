import React, { useContext } from "react";

import { Button } from "../components/Field";

import buttonStyle from "../components/Field/style.module.css";
import style from "./style.module.css";

import LazyLoad from "../components/Lazyload";
import { AppContext } from "../Contexts/AppContext";

const NoMatch = () => {
  const {
    appContext: { winHeight, height },
  } = useContext(AppContext);
  return (
    <div className={`c`}>
      <LazyLoad
        lazyLoadClass={`section_wrap`}
        animatedClass="animated"
        rootMargin="-20%"
      >
        <div
          className={`no_match ${style.outer}`}
          style={{ minHeight: (winHeight - height) * (80 / 100) }}
        >
          <div className={`section_border_left`}></div>
          <div className={`section_border_right`}></div>
          <div className={`section_border_bottom`}></div>
          <div className={style.notFound}>
            <h1>404</h1>
            <h2>Oops! We can’t find that page...</h2>
            <p>
              The page you are looking for might have been removed, had its name
              changed or is temporaily unavailable.
            </p>
            <Button
              className={style.no_match_btn}
              label="Go to Home"
              link={"/"}
              buttonType="header_blue_btn"
            />
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default NoMatch;
