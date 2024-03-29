import React, { useContext, useState } from "react";
import { chunk, get } from "lodash";

import Media from "../../../components/Media";
import NormalLink from "../../../components/NormalLink";
import LazyLoad from "../../../components/Lazyload";
import { data } from "../../../helpers/mock";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";

import style from "./style.module.css";
import AmenitiesModal from "../../../components/AmenitiesModal";
import { AppContext } from "../../../Contexts/AppContext";

const Amenities = ({
  heading,
  items = [],
  close_icon,
  forPage,
  hide_bottom_border,
  max_length,
}) => {
  const {
    appContext: { winWidth },
  } = useContext(AppContext);
  const [open, setOpen] = useState({ state: false, index: 0 });
  const [currentIndex, setCurrentIndex] = useState();
  const sliced_items = max_length ? [...items].slice(0, max_length) : items;

  if (!items || items.length <= 0) {
    return null;
  }

  const chunks = () => {
    if (winWidth < 940) return chunk(sliced_items, 2);
    return chunk(sliced_items, 3);
  };

  const getAmenityData = () => ({
    top_title: heading,
    title: items[open.index].title,
    image_position: "right",
    image: items[open.index].image,
    text: items[open.index].description || items[open.index].text,
    next_label:
      open.index === items.length - 1 ? "" : items[open.index + 1].title,
  });

  return (
    <>
      <EqualHeight>
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
              <div className={`${style.head}`}>{heading}</div>
            </div>
          </div>
        </LazyLoad>
        <LazyLoad
          lazyLoadClass={`c amenities`}
          animatedClass="animated"
          rootMargin="-20%"
        >
          <div
            className={`section_wrap col_3${
              winWidth < 940 && winWidth >= 550 ? ` col_50_50` : ""
            }`}
          >
            <div className={`section_border_left`}></div>
            <div className={`section_border_right`}></div>
            <div className={`section_border_middle`}></div>
            {hide_bottom_border ? (
              <></>
            ) : (
              <div className={`section_border_bottom`}></div>
            )}
            {winWidth > 940 && items.length >= 2 && (
              <div className={`section_border_middle_2`}></div>
            )}

            {chunks().map((items, cIndex) =>
              items.map((item, index) => {
                const curIndex = index + 1;
                let islastRow = false;
                if (chunks().length === cIndex + 1) {
                  islastRow = true;
                }
                return (
                  <div
                    className={`section_item ${style.item} ${
                      curIndex % 3 === 0 ? ` no_border_right` : ``
                    } ${islastRow ? `last_row` : ``}`}
                    key={`amenities_${index}`}
                  >
                    {!islastRow && (
                      <div className={`section_item_border_bottom`}></div>
                    )}
                    {winWidth < 940 && (
                      <div className={`section_item_border_bottom`}></div>
                    )}

                    <EqualHeightElement name="Amenities">
                      <div className={style.content}>
                        <div className={style.wrap}>
                          <div className={style.item_bg}>
                            <div className={style.sizer} />
                            <Media
                              className={style.item_img}
                              src={item.image}
                              size="608x472px"
                              alt={item.title}
                            />
                          </div>
                        </div>
                        <div className={style.title}>{item.title}</div>
                        <div className={style.text}>{item.text}</div>
                        <NormalLink
                          onClick={() => {
                            forPage === "offices"
                              ? item.onButtonClick()
                              : setOpen({
                                  state: true,
                                  index: index,
                                });
                          }}
                          className={`${style.link} ${
                            forPage === "offices" ? style.blue_link : ""
                          } `}
                        >
                          {forPage === "offices"
                            ? "Contact Us"
                            : "Find Out More"}
                        </NormalLink>
                      </div>
                    </EqualHeightElement>
                  </div>
                );
              })
            )}
          </div>
        </LazyLoad>
        {open.state === true && (
          <AmenitiesModal
            close_icon={close_icon}
            index={open.index}
            data_length={items.length}
            setOpen={setOpen}
            content={getAmenityData()}
            onClose={() => setOpen(false)}
          />
        )}
      </EqualHeight>
    </>
  );
};

export default Amenities;
