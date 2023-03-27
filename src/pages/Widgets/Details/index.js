import { get } from "lodash";
import React, { useContext } from "react";
import {
  EqualHeight,
  EqualHeightElement,
  EqualHeightContext,
} from "react-equal-height/clean";

import { Button } from "../../../components/Field";
import LazyLoad from "../../../components/Lazyload";
import TextEditor from "../TextEditor";
import NormalLink from "../../../components/NormalLink";
import { AppContext } from "../../../Contexts/AppContext";

import style from "./style.module.css";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Details = ({ items = [], pageFor }) => {
  const [textEditorRef, setTextEditorRef] = useState(null);

  const {
    appContext: { winWidth },
  } = useContext(AppContext);

  const { setForceUpdate } = useContext(EqualHeightContext);

  // console.log("editor ref --->", textEditorRef.current);

  const styleSelector = {
    coral: style.coral,
  };

  useEffect(() => {
    setForceUpdate((value) => !value);
  }, [textEditorRef]);

  // const setRef = useCallback(
  //   (node) => {
  //     textEditorRef.current = node;
  //     if (open) {
  //       // always logs the DOM node, or undefined if it's being unmounted
  //       console.log(node);
  //     }
  //   },
  //   [open]
  // );

  return (
    <>
      <EqualHeight timeout={1500} updateOnChange={textEditorRef}>
        <div className={`c has_border`}>
          <LazyLoad
            lazyLoadClass={`section_wrap details col_3 ${
              winWidth < 1260 && winWidth >= 650 ? ` col_50_50` : ""
            }`}
            animatedClass="animated"
            rootMargin="-20%"
          >
            <div className={`section_border_top`}></div>
            <div className={`section_border_left`}></div>
            <div className={`section_border_right`}></div>
            {pageFor === "club detail" ? null : (
              <div className={`section_border_bottom`}></div>
            )}
            <div className={`section_border_middle`}></div>
            {winWidth >= 1260 && items.length >= 2 && (
              <div className={`section_border_middle_2`}></div>
            )}
            <div className={style.section}>
              {items.map((item, index) => {
                return (
                  <div
                    className={`details_table ${style.item}`}
                    key={`details_${index}`}
                  >
                    <div className={style.title}>
                      <EqualHeightElement name="DetailsTitle">
                        {item.title}
                      </EqualHeightElement>
                    </div>
                    <EqualHeightElement name="DetailsContent">
                      <div className={`${style.wrapper}`}>
                        {item.type === "text" ? (
                          <div className={style.list}>{item.text}</div>
                        ) : (
                          item.list.map((value, j) => {
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
                                    styleSelector[value.hover] || ""
                                  } ${
                                    get(item, "className", false)
                                      ? `${
                                          style[get(item, "className", false)]
                                        } `
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
                                    <div className={style.value}>
                                      <NormalLink
                                        link={`${
                                          value.type ? value.type + ":" : ""
                                        }${value.link}`}
                                        className={style.link}
                                      >
                                        {value.linkLabel || value.link}
                                      </NormalLink>
                                    </div>
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
                                    link={value.link}
                                    onClick={on_button_click}
                                    label={value.button_label}
                                  />
                                </div>
                              );
                            }
                          })
                        )}
                      </div>
                      {pageFor === "club detail" ? null : (
                        <div className={`section_border_bottom`}></div>
                      )}
                    </EqualHeightElement>
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
