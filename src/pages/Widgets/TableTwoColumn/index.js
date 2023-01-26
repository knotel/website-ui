import React, { useContext } from "react";
import { chunk } from "lodash";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";
import LazyLoad from "../../../components/Lazyload";

import style from "./style.module.css";
import { AppContext } from "../../../Contexts/AppContext";

const TableTwoColumn = ({ items = [] }) => {
  const {
    appContext: { winWidth },
  } = useContext(AppContext);
  const chunks = chunk(items, 2);

  if (!items || items.length <= 0) {
    return null;
  }
  return (
    <>
      <div className={`c has_border`}>
        <EqualHeight>
          <LazyLoad
            lazyLoadClass={`section_wrap ${winWidth > 950 ? `col_2` : ""}`}
            animatedClass="animated"
            rootMargin="-20%"
          >
            <div className={`section_border_top`}></div>
            <div className={`section_border_left`}></div>
            <div className={`section_border_right`}></div>
            <div className={`section_border_bottom`}></div>
            {winWidth > 950 && <div className={`section_border_middle`}></div>}
            {chunks.map((items, cIndex) =>
              items.map((item, index) => {
                let islastRow = false;
                if (chunks.length === cIndex + 1) {
                  islastRow = true;
                }
                return (
                  <div
                    className={`section_item ${style.item}`}
                    key={`text_table_${index}`}
                  >
                    {!islastRow && index % 2 === 0 && (
                      <div className={`section_item_border_bottom`}></div>
                    )}
                    <LazyLoad
                      lazyLoadClass={`section_wrap`}
                      animatedClass="animated"
                      rootMargin="-20%"
                    >
                      <div className={`section_border_bottom`}></div>
                      <EqualHeightElement name="TextTableTitle">
                        <div className={style.title}>{item.title}</div>
                      </EqualHeightElement>
                    </LazyLoad>
                    <div className={`two_column_content ${style.content}`}>
                      <EqualHeightElement name="TextTableText">
                        <LazyLoad>
                          <div
                            className={style.text}
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          ></div>
                        </LazyLoad>
                      </EqualHeightElement>
                      <div className={`section_border_bottom`}></div>
                    </div>
                  </div>
                );
              })
            )}
          </LazyLoad>
        </EqualHeight>
      </div>
    </>
  );
};

export default TableTwoColumn;
