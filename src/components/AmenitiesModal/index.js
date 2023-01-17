import React from "react";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";

import Media from "../Media";
import DialogBox from "../DialogBox";
import LazyLoad from "../Lazyload";

import style from "./style.module.css";
import NormalLink from "../NormalLink";

const AmenitiesModal = ({ content, onClose }) => {
  return (
    <DialogBox className={style.AmenitiesModal} onClose={onClose}>
      <EqualHeight>
        <div className={style.outer}>
          <div className={style.top}>{content.top_title}</div>
          <LazyLoad
            lazyLoadClass={`section_wrap`}
            animatedClass="animated"
            rootMargin="-20%"
          >
            <div className={`section_border_top`}></div>
            <div className={`section_border_left`}></div>
            <div className={`section_border_right`}></div>
            <div className={`section_border_bottom`}></div>

            <div
              className={`${style.section} ${
                content.image_position === "right"
                  ? `col_50_50 ${style.right_side}`
                  : `col_50_50`
              }`}
            >
              <div className={`section_item_border_bottom`}></div>
              <div className={`section_border_middle`}></div>
              <div className={style.left}>
                <EqualHeightElement name="AmenitiesModal">
                  <div className={style.img_wrap}>
                    <div className={style.sizer} />
                    <Media src={content.image} size="608x472px" />
                  </div>
                </EqualHeightElement>
              </div>
              <div className={`${style.right}`}>
                <EqualHeightElement name="AmenitiesModal">
                  <LazyLoad className={style.content}>
                    <div className={style.title}>{content.title}</div>
                    <div
                      className={style.text}
                      dangerouslySetInnerHTML={{ __html: content.text }}
                    ></div>
                  </LazyLoad>
                  <div className={style.next}>
                    Next: {content.next_label}
                    <NormalLink className={style.next_icon}>
                      <span className={style.icon}>
                        <i className="fa fa-arrow-right"></i>
                      </span>
                    </NormalLink>
                  </div>
                </EqualHeightElement>
              </div>
            </div>
          </LazyLoad>
        </div>
      </EqualHeight>
    </DialogBox>
  );
};

export default AmenitiesModal;
