import React from "react";
import { chunk } from "lodash";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";

import LazyLoad from "../../../components/Lazyload";

import style from "./style.module.css";

const TextTable = ({ items = [], extraClass = false }) => {
  const chunks = chunk(items, 3);

  if (!items || items.length <= 0) {
    return null;
  }
  return (
    <>
      <EqualHeight>
        <div className={extraClass === true ? `has_border` : `c has_border`}>
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
                const curIndex = index + 1;
                let islastRow = false;
                if (chunks.length === cIndex + 1) {
                  islastRow = true;
                }
                return (
                  <div
                    className={`section_item ${style.text_wrap} ${
                      curIndex % 3 === 0 ? ` no_border_right` : ``
                    } ${islastRow ? `last_row` : ``}`}
                    key={`text_table_${index}`}
                  >
                    {!islastRow && index % 3 === 0 && (
                      <div className={`section_item_border_bottom`}></div>
                    )}
                    <div className={style.title}>
                      <EqualHeightElement name="TextTableTitle">
                        {item.title}
                      </EqualHeightElement>
                    </div>
                    <EqualHeightElement name="TextTableText">
                      <LazyLoad
                        lazyLoadClass={`section_wrap`}
                        animatedClass="animated"
                        rootMargin="-20%"
                      >
                        <div className={`section_border_top_full`}></div>
                        <div className={style.table_text}>
                          <div className={`section_text`}>{item.text}</div>
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
    </>
  );
};

export default TextTable;
