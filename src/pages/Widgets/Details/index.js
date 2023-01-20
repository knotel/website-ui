import { get } from "lodash";
import React from "react";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";

import { Button } from "../../../components/Field";
import LazyLoad from "../../../components/Lazyload";
import NormalLink from "../../../components/NormalLink";

import style from "./style.module.css";

const Details = ({ items = [] }) => {
  return (
    <>
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
            <div className={style.section}>
              {items.map((item, index) => {
                return (
                  <div className={`${style.item}`} key={`details_${index}`}>
                    <div className={style.title}>
                      <EqualHeightElement name="DetailsTitle">
                        {item.title}
                      </EqualHeightElement>
                    </div>
                    <div className={style.wrapper}>
                      <EqualHeightElement name="DetailsContent">
                        {item.list.map((value, j) => {
                          const {
                            button_label = false,
                            icon = false,
                            text = false,
                            on_button_click,
                          } = value;
                          if (icon) {
                            return (
                              <div
                                className={`${
                                  get(item, "className", false)
                                    ? `${style[get(item, "className", false)]} `
                                    : ""
                                }${style.text_wrap}`}
                                key={`about_${j}`}
                              >
                                <div className={style.flex}>
                                  <div className={style.icon}>
                                    <img
                                      src={value.icon}
                                      alt={`${value.label} icon`}
                                    />
                                  </div>
                                  <div className={style.label}>
                                    {value.label}
                                  </div>
                                </div>
                                {value.value && (
                                  <div className={style.value}>
                                    {value.value}
                                  </div>
                                )}
                                {value.link && (
                                  <NormalLink
                                    link={`${
                                      value.type ? value.type + ":" : "s"
                                    }${value.link}`}
                                    className={style.link}
                                  >
                                    {value.linkLabel || value.link}
                                  </NormalLink>
                                )}
                                {value.hours === true && (
                                  <div>
                                    <div>
                                      {" "}
                                      {value.openDays}: {value.open}
                                    </div>
                                    <div>{value.timing}</div>
                                    <div className={style.padd}>
                                      {value.closedDays}:
                                    </div>
                                    <div>{value.close}</div>
                                  </div>
                                )}
                              </div>
                            );
                          }
                          if (text) {
                            return (
                              <ul className={style.list} key={`list_${j}`}>
                                <li>{value.text}</li>
                              </ul>
                            );
                          }
                          if (button_label) {
                            return (
                              <div className={style.info} key={`info_${j}`}>
                                <Button
                                  className={style.download}
                                  icon_placement="left"
                                  svgIcon={value.logo}
                                  onClick={on_button_click}
                                  label={value.button_label}
                                />
                              </div>
                            );
                          }
                        })}
                      </EqualHeightElement>
                    </div>
                  </div>
                );
              })}
            </div>
          </LazyLoad>
        </div>
      </EqualHeight>
    </>
  );
};

export default Details;
