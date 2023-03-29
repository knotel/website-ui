import React, { useContext } from "react";
import { chunk } from "lodash";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";

import Button from "../../../components/Field/Button";
import LazyLoad from "../../../components/Lazyload";
import { AppContext } from "../../../Contexts/AppContext";

import style from "./style.module.css";

const CallToAction = ({ items = [], forPage }) => {
  const {
    appContext: { winWidth },
  } = useContext(AppContext);
  const chunks = chunk(items, 2);

  if (!items || items.length <= 0) {
    return null;
  }

  const colorClass = {
    blue_hover: style.blue_hover,
  };

  return (
    <EqualHeight>
      <div className={`c has_border call_to_action`}>
        <LazyLoad
          lazyLoadClass={`section_wrap col_2`}
          animatedClass="animated"
          rootMargin="-20%"
        >
          <div className={`section_border_top`}></div>
          <div className={`section_border_left`}></div>
          <div className={`section_border_right`}></div>
          <div className={`section_border_bottom`}></div>
          {winWidth > 820 && forPage !== "membership" && (
            <div className={`section_border_middle`}></div>
          )}
          {winWidth > 820 && items.length >= 2 && (
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
                  className={`section_item ${style.text_wrap} `}
                  key={`text_block_${index}`}
                >
                  {!islastRow && index % 2 === 0 && (
                    <div className={`section_item_border_bottom`}></div>
                  )}
                  <EqualHeightElement name="TextBlock">
                    <div className={`${style.item_inner_wrap}`}>
                      <div>
                        <div className={style.title}>{item.title}</div>
                        <div className={style.text}>{item.text}</div>
                        <div className={style.button}>
                          <Button
                            buttonType="banner_button"
                            className={`${style.item_btn} ${
                              colorClass[item.button_type]
                            }`}
                            label={item.button_label}
                            link={item.button_url}
                          />
                        </div>
                      </div>
                    </div>
                  </EqualHeightElement>
                  <div className={`section_border_bottom`}></div>
                </div>
              );
            })
          )}
        </LazyLoad>
      </div>
    </EqualHeight>
  );
};

export default CallToAction;
