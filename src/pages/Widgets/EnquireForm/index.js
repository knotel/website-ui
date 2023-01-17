import React, { useContext } from "react";
import { get } from "lodash";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";

import { data } from "../../../helpers/mock";
import ContactForm from "../../../components/ContactForm";

import style from "./style.module.css";
import LazyLoad from "../../../components/Lazyload";
import { AppContext } from "../../../Contexts/AppContext";

const EnquireForm = ({ title, text }) => {
  const {
    appContext: { winHeight, height },
  } = useContext(AppContext);
  return (
    <>
      <EqualHeight>
        <div className={`c has_border`}>
          <LazyLoad
            lazyLoadClass={`section_wrap col_40_60`}
            animatedClass="animated"
            rootMargin="-20%"
          >
            <div className={`section_border_left`}></div>
            <div className={`section_border_right`}></div>
            <div className={`section_border_bottom`}></div>
            <div className={`section_border_middle`}></div>
            <div
              className={style.enquire_wrap}
              style={{ minHeight: (winHeight - height) * (80 / 100) }}
            >
              <div className={style.left}>
                <EqualHeightElement name="EnquireForm">
                  <div className={`section_title`}>{title}</div>
                  <div
                    className={style.text}
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                </EqualHeightElement>
              </div>
              <div className={style.right}>
                <EqualHeightElement name="EnquireForm">
                  <div className={style.content}>
                    <div className={style.forms}>
                      <ContactForm contact={get(data, "contact", {})} />
                    </div>
                  </div>
                </EqualHeightElement>
              </div>
            </div>
          </LazyLoad>
        </div>
      </EqualHeight>
    </>
  );
};

export default EnquireForm;
