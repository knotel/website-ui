import React, { useContext } from "react";
import { chunk } from "lodash";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";

import LazyLoad from "../../../components/Lazyload";

import style from "./style.module.css";
import { AppContext } from "../../../Contexts/AppContext";

const TextTable = ({ items = [], extraClass = false }) => {
  const {
    appContext: { winWidth },
  } = useContext(AppContext);

  const chunks = () => {
    if (winWidth >= 950) return chunk(items, 3);
    else if (winWidth < 950 && winWidth >= 740) return chunk(items, 2);
    return chunk(items, 1);
  };

  if (!items || items.length <= 0) {
    return null;
  }
  return (
    <>
      <EqualHeight>
        <div
          className={
            extraClass === true
              ? `has_border text_table`
              : `c has_border text_table`
          }
        >
          <LazyLoad
            lazyLoadClass={`section_wrap col_3 ${
              winWidth < 950 && winWidth >= 740 ? ` col_50_50` : ""
            }`}
            animatedClass="animated"
            rootMargin="-20%"
          >
            <div className={`section_border_top`}></div>
            <div className={`section_border_left`}></div>
            <div className={`section_border_right`}></div>
            <div className={`section_border_bottom`}></div>
            <div className={`section_border_middle`}></div>
            {winWidth >= 950 && items.length >= 2 && (
              <div className={`section_border_middle_2`}></div>
            )}
            {chunks().map((items, cIndex) =>
              items.map((item, index) => {
                const curIndex = index + 1;
                let islastRow = false;
                if (chunks.length === cIndex + 1) {
                  islastRow = true;
                }
                return (
                  <div
                    className={`section_item text_table_border ${
                      style.text_wrap
                    } ${curIndex % 3 === 0 ? ` no_border_right` : ``} ${
                      islastRow ? `last_row` : ``
                    }`}
                    key={`text_table_${index}`}
                  >
                    <div className={style.title}>
                      <EqualHeightElement name="TextTableTitle">
                        {item.title}
                      </EqualHeightElement>
                    </div>
                    <div className={`table_content`}>
                      <EqualHeightElement name="TextTableText">
                        <LazyLoad
                          lazyLoadClass={`section_wrap`}
                          animatedClass="animated"
                          rootMargin="-20%"
                        >
                          <div className={`section_border_top_full`}></div>
                          <div className={style.table_text}>
                            <div className={style.text}>{item.text}</div>
                          </div>
                        </LazyLoad>
                      </EqualHeightElement>
                      <div className={`section_border_bottom`}></div>
                    </div>
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
