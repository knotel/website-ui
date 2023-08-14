import React from "react";
import { get } from "lodash";

import { Button } from "../../../components/Field";
import Media from "../../../components/Media";
import LazyLoad from "../../../components/Lazyload";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";

import style from "./style.module.css";

const TextImageBlock = ({ items = [] }) => {
  if (!items || items.length <= 0) {
    return null;
  }

  return (
    <EqualHeight>
      <div className={`c has_border text_image_block`}>
        <LazyLoad
          lazyLoadClass={`section_wrap`}
          animatedClass="animated"
          rootMargin="-20%"
        >
          <div className={`section_border_top`}></div>
          <div className={`section_border_left`}></div>
          <div className={`section_border_right`}></div>
          <div className={`section_border_bottom`}></div>
          {items &&
            items.length > 0 &&
            items.map((item, i) => (
              <div
                className={`section_item ${style.text_image} ${
                  get(item, "image_position") === "left"
                    ? `col_66_33 ${style.left_side}`
                    : `col_33_66 ${style.block}`
                }`}
                key={`text_img_${i}`}
              >
                {i + 1 !== items.length && (
                  <div className={`section_item_border_bottom`}></div>
                )}
                <div className={`section_border_middle`}></div>
                <LazyLoad className={`text_left ${style.left}`}>
                  <EqualHeightElement name="TextImageBlock">
                    <div className={style.content_wrap}>
                      <div className={style.title}>{item.title}</div>
                      <div className={style.sub_title}>{item.sub_title}</div>
                      <div className={style.text}>{item.text}</div>
                      <div className={style.button}>
                        <Button
                          buttonType="block_btn"
                          onClick={item.onButtonClick}
                          label={item.button_label}
                          link={item.button_url}
                        />
                      </div>
                    </div>
                  </EqualHeightElement>
                  <div className={`section_border_bottom`}></div>
                </LazyLoad>
                <div className={style.right}>
                  <div className={style.content_wrap}>
                    <EqualHeightElement name="TextImageBlock">
                      <div className={style.img_wrap}>
                        <div className={style.sizer} />
                        <Media src={item.image} alt={item.title} />
                      </div>
                    </EqualHeightElement>
                  </div>
                </div>
              </div>
            ))}
        </LazyLoad>
      </div>
    </EqualHeight>
  );
};

export default TextImageBlock;
