import React from "react";
import { EqualHeight, EqualHeightElement } from "react-equal-height";

import GoogleMaps from "../../../components/GoogleMaps";
import LazyLoad from "../../../components/Lazyload";

import style from "./style.module.css";

const FindUs = ({ title, address, items = [], loc = {} }) => {
  return (
    <>
      <EqualHeight>
        <div className={`c has_border`}>
          <LazyLoad
            lazyLoadClass={`section_wrap col_33_66`}
            animatedClass="animated"
            rootMargin="-20%"
          >
            <div className={`section_border_top`}></div>
            <div className={`section_border_left`}></div>
            <div className={`section_border_right`}></div>
            <div className={`section_border_bottom`}></div>
            <div className={`section_border_middle`}></div>
            <div className={style.left}>
              <EqualHeightElement name="FindUS">
                <div className={style.content}>
                  <div className={style.title}>{title}</div>
                  <div className={style.address}>{address}</div>
                  <div className={style.details}>
                    {items.map((value, j) => {
                      return (
                        <div
                          className={style.text_wrap}
                          key={`find_details_${j}`}
                        >
                          <div className={style.icon}>
                            <img src={value.icon} alt={`${value.label} icon`} />
                          </div>
                          <div className={style.label}>{value.label}</div>
                          <div className={style.value}>{value.value}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </EqualHeightElement>
            </div>
            <div className={style.right}>
              <EqualHeightElement name="FindUS">
                <div className={style.map}>
                  <GoogleMaps
                    markers={[{ loc }]}
                    center={{ lat: 51.507222, lng: -0.1275 }}
                    zoom={15}
                  />
                </div>
              </EqualHeightElement>
            </div>
          </LazyLoad>
        </div>
      </EqualHeight>
    </>
  );
};

export default FindUs;
