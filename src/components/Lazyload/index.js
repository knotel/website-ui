import React, { useState } from "react";
import OutOfView from "./OutOfView";
import style from "./style.module.css";

const LazyLoad = ({
  className = "",
  lazyLoadClass = style.lazyLoad,
  animatedClass = style.enter,
  children,
  rootMargin = "-10%",
  id,
}) => {
  const [cssClass, setCssClass] = useState("");

  const onOutHandler = (entry, observer, observerRef) => {
    if (entry.isIntersecting) {
      setCssClass(animatedClass);
      if (observerRef) {
        observer.disconnect();
      }
    }
  };

  return (
    <OutOfView
      className={`${className ? className + " " : ""}${lazyLoadClass} ${
        cssClass ? " " + cssClass : ""
      }`}
      id={id}
      rootMargin={rootMargin}
      onOutCallback={onOutHandler}
    >
      {children}
    </OutOfView>
  );
};

export default LazyLoad;
