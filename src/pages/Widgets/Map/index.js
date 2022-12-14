import React, { Suspense, lazy } from "react";
import LazyLoad from "../../../components/Lazyload";

import style from "./style.module.css";

const GoogleMaps = lazy(() => import("../../../components/GoogleMaps"));

const Map = ({ address, loc = {}, APIKey, markerIcon }) => {
  return (
    <>
      <div className={`${style.outer}`}>
        <LazyLoad
          lazyLoadClass={`section_wrap has_border`}
          animatedClass="animated"
          rootMargin="-20%"
        >
          <div className={`section_border_top`}></div>
          <div className={`section_border_bottom`}></div>
          <div className={`c`}>
            <div className={`section_wrap`}>
              <div className={`section_border_left`}></div>
              <div className={`section_border_right`}></div>
              <div className={style.top}>
                <div className={style.title}>Map</div>
                <div className={style.address}>{address}</div>
              </div>
            </div>
          </div>
        </LazyLoad>
        <div className={`c`}>
          <Suspense fallback={<></>}>
            <LazyLoad
              lazyLoadClass={`section_wrap`}
              animatedClass="animated"
              rootMargin="-20%"
            >
              <div className={`section_border_left`}></div>
              <div className={`section_border_right`}></div>
              <div className={`section_border_bottom`}></div>
              <div className={style.map}>
                <GoogleMaps
                  APIKey={APIKey}
                  markerIcon={markerIcon}
                  markers={[{ loc }]}
                  center={loc}
                  zoom={15}
                />
              </div>
            </LazyLoad>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Map;
