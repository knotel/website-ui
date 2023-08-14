import React, { useState } from "react";
import { get, isEmpty } from "lodash";
import Spinner from "../Spinner";
import OutOfView from "../Lazyload/OutOfView";
import { generateUrl } from "./Url";
import style from "./style.module.css";

const BrokenImage = ({ className, icon = "fa-image", sizer }) => {
  return (
    <>
      {sizer === true && <div className={style.sizer}></div>}
      <div className={style.bsz}>
        <div className={`${style.bgImage}${className ? " " + className : ""}`}>
          <div className={style.fa}>
            <i className={`fa-solid ${icon}`}></i>
          </div>
        </div>
      </div>
    </>
  );
};

const NormalImage = ({ src, className, alt }) => {
  return (
    <div className={style.bsz}>
      <div
        role="img"
        aria-label={alt}
        className={`${style.bgImage}${className ? " " + className : ""}`}
        style={{ backgroundImage: `url(${src})` }}
      >
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

const LazyImage = ({ src, className, alt, sizer }) => {
  const [loaded, setLoaded] = useState(0);
  const [dimesion, setDimension] = useState([0, 0]);

  const onOutHandler = (entry, observer) => {
    if (entry.isIntersecting && loaded === 0) {
      //Create an image
      let img = new Image();
      img.src = src;
      //Check for load status
      if (img.complete || img.readystate === 4) {
        setLoaded(1);
        setDimension([img.width, img.height]);
      } else {
        img.onload = () => {
          setLoaded(1);
          setDimension([img.width, img.height]);
        };
        img.onerror = () => {
          setLoaded(2);
          console.log("Error in loading img: " + src);
        };
      }
      observer.disconnect();
    }
  };

  return (
    <>
      {sizer === true && (
        <div
          className={style.sizer}
          style={{
            paddingTop: `${
              dimesion[0] > 0 && dimesion[1] > 0
                ? (dimesion[1] * 100) / dimesion[0]
                : 50
            }%`,
          }}
        ></div>
      )}
      <OutOfView className={style.bsz} onOutCallback={onOutHandler}>
        <div
          role="img"
          aria-label={alt}
          className={`${style.bgImage}${className ? " " + className : ""}${
            loaded === 0 ? " " + style.loading : ""
          }`}
          style={{
            backgroundImage: loaded === 1 ? `url("${encodeURI(src)}")` : "none",
          }}
        >
          {loaded === 1 && <img src={src} alt={alt} />}
          {loaded === 0 && (
            <div className={style.spinner}>
              <Spinner color="#fff" />
            </div>
          )}
          {loaded === 2 && (
            <div className={style.fa}>
              <i className={`fa-regular fa-image-slash`}></i>
            </div>
          )}
        </div>
      </OutOfView>
    </>
  );
};

const Media = ({
  src,
  size = false,
  className = false,
  alt = "",
  lazy = true,
  fallback = true,
  retainAspectRatio = false,
}) => {
  //If src is empty then display a broken image
  if (isEmpty(src)) {
    if (fallback === true) {
      //Show a broken image for fallback if set to true
      return <BrokenImage sizer={retainAspectRatio} />;
    }
    return null;
  }

  //Validate size
  if (
    get(src, "type", "") === "image" &&
    (size === false || /{\d+}x{\d+}/g.test(size))
  ) {
    alert("Enter sizer information for the image. Size is a required field.");
  }

  //Construct image url
  let image_url = generateUrl(src, size);

  //If lazy load is disabled, then display the image directly
  if (lazy === false && retainAspectRatio === false) {
    return <NormalImage src={image_url} className={className} alt={alt} />;
  }

  //Lazy load the image
  return (
    <LazyImage
      src={image_url}
      className={className}
      alt={alt}
      sizer={retainAspectRatio}
    />
  );
};

export default Media;
