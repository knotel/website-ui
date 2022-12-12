import React, { useState } from "react";
import { chunk, get } from "lodash";

import Media from "../../../components/Media";
import NormalLink from "../../../components/NormalLink";
import LazyLoad from "../../../components/Lazyload";
import { data } from "../../../helpers/mock";

import style from "./style.module.css";
import AmenitiesModal from "../../../components/AmenitiesModal";

const Amenities = ({ heading, items = [] }) => {
  const [open, setOpen] = useState({ state: false, index: 0 });
  const [currentIndex, setCurrentIndex] = useState();
  const chunks = chunk(items, 3);

  if (!items || items.length <= 0) {
    return null;
  }

  const getAmenityData = () => ({
    top_title: "Club amenities",
    title: items[open.index].title,
    image_position: "right",
    image: items[open.index].image,
    text: items[open.index].text,
    next_label:
      open.index === items.length - 1 ? "" : items[open.index + 1].title,
  });

  return (
    <>
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
            <div className={`section_title ${style.head}`}>{heading}</div>
          </div>
        </div>
      </LazyLoad>
      <LazyLoad lazyLoadClass={`c`} animatedClass="animated" rootMargin="-20%">
        <div className={`section_wrap col_3`}>
          <div className={`section_border_left`}></div>
          <div className={`section_border_right`}></div>
          <div className={`section_border_middle`}></div>
          <div className={`section_border_bottom`}></div>
          {items.length >= 2 && (
            <div className={`section_border_middle_2`}></div>
          )}
          {chunks.map((items, cIndex) =>
            items.map((item, index) => {
              const curIndex = index + 1;
              let islastRow = false;
              if (chunks.length === cIndex + 1) {
                islastRow = true;
              }
              return (
                <div
                  className={`section_item ${style.item} ${
                    curIndex % 3 === 0 ? ` no_border_right` : ``
                  } ${islastRow ? `last_row` : ``}`}
                  key={`amenities_${index}`}
                >
                  {!islastRow && index % 3 === 0 && (
                    <div className={`section_item_border_bottom`}></div>
                  )}
                  <div className={style.wrap}>
                    <div className={style.item_bg}>
                      <div className={style.sizer} />
                      <Media
                        className={style.item_img}
                        src={item.image}
                        size="608x472px"
                      />
                    </div>
                  </div>
                  <div className={style.title}>{item.title}</div>
                  <div className={style.text}>{item.text}</div>
                  <NormalLink
                    onClick={() => {
                      setOpen({ state: true, index });
                    }}
                    className={style.link}
                  >
                    Find Out More
                  </NormalLink>
                  {open.state === true && (
                    <AmenitiesModal
                      content={getAmenityData(item, index)}
                      onClose={() => setOpen(false)}
                    />
                  )}
                </div>
              );
            })
          )}
        </div>
      </LazyLoad>
    </>
  );
};

export default Amenities;
