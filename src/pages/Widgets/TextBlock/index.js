import React from "react";
import { chunk } from "lodash";
import { EqualHeight, EqualHeightElement } from "react-equal-height";

import Button from "../../../components/Field/Button";
import LazyLoad from "../../../components/Lazyload";

import style from "./style.module.css";

const TextBlock = ({ items = [] }) => {
  const chunks = chunk(items, 3);

  if (!items || items.length <= 0) {
    return null;
  }
  return (
    <EqualHeight>
      <div className={`c has_border`}>
        <LazyLoad
          lazyLoadClass={`section_wrap col_3`}
          animatedClass="animated"
          rootMargin="-20%"
        >
          <div className={`section_border_top`}></div>
          <div className={`section_border_left`}></div>
          <div className={`section_border_right`}></div>
          <div className={`section_border_bottom`}></div>
          <div className={`section_border_middle`}></div>
          {items.length >= 2 && (
            <div className={`section_border_middle_2`}></div>
          )}
          {chunks.map((items, cIndex) =>
            items.map((item, index) => {
              let islastRow = false;
              if (chunks.length === cIndex + 1) {
                islastRow = true;
              }
              return (
                <div
                  className={`section_item ${style.text_wrap}`}
                  key={`text_block_${index}`}
                >
                  {!islastRow && index % 3 === 0 && (
                    <div className={`section_item_border_bottom`}></div>
                  )}
                  <EqualHeightElement name="TextBlock">
                    <LazyLoad className={`${style.item_inner_wrap}`}>
                      <div className={`section_title`}>{item.title}</div>
                      <div className={style.sub_title}>{item.sub_title}</div>
                      <div className={style.text}>{item.text}</div>
                      <div className={style.button}>
                        <Button
                          buttonType="block_btn"
                          label={item.button_label}
                          link={item.button_url}
                        />
                      </div>
                    </LazyLoad>
                  </EqualHeightElement>
                </div>
              );
            })
          )}
        </LazyLoad>
      </div>
    </EqualHeight>
  );
};

export default TextBlock;
