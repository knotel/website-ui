import React from "react";
import LazyLoad from "../../../components/Lazyload";
import GoogleMaps from "../../../components/GoogleMaps";

import style from "./style.module.css";


const Map = ({ address, loc = {}, APIKey, markerIcon, onMarkerPress }) => {
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
          <LazyLoad
            lazyLoadClass={`section_wrap ${style.mapPad}`}
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
                onMarkerPress={onMarkerPress}
              />
            </div>
          </LazyLoad>
        </div>
      </div>
    </>
  );
};

export default Map;
