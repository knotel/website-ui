import React, { useEffect, useRef, useState } from "react";
import { get } from "lodash";
import dynamic from "next/dynamic";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { Button } from "../../../components/Field";
import Media from "../../../components/Media";
import LazyLoad from "../../../components/Lazyload";
import Slider from "../../../components/Slider";
import NormalLink from "../../../components/NormalLink";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import style from "./style.module.css";

const sliderOptions = { type: "loop", arrows: false, pagination: false };

const TextImageSlider = ({
  items = [],
  autoHeight = false,
  delay = 10000,
  preview_type,
  hideBorder = "",
}) => {
  const swiperRef = useRef(null);
  const colorClass = {
    green: style.greenBg,
    darkblue: style.blueBg,
  };
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const [pdfImages, setPdfImages] = useState([]);

  const btn_classes = {
    blue_hover: style.blue_hover,
  };

  useEffect(() => {
    if (ready) return;

    if (swiperRef?.current) {
      if (preview_type === "pdf" && !pdfImages.length) return;
      setReady(true);
    }
  }, [swiperRef?.current, pdfImages]);

  if (!items || items.length <= 0) {
    return null;
  }

  return preview_type === "pdf" && !pdfImages.length ? (
    <></>
  ) : (
    <>
      <EqualHeight>
        <div className={`c has_border`}>
          <LazyLoad
            lazyLoadClass={`section_wrap text_img_slider`}
            animatedClass="animated"
            rootMargin="-20%"
          >
            {hideBorder === "top" ? (
              <></>
            ) : (
              <div className={`section_border_top`}></div>
            )}
            {hideBorder === "left" ? (
              <></>
            ) : (
              <div className={`section_border_left`}></div>
            )}
            {hideBorder === "right" ? (
              <></>
            ) : (
              <div className={`section_border_right`}></div>
            )}

            {hideBorder === "bottom" ? (
              <></>
            ) : (
              <div className={`section_border_bottom`}></div>
            )}
            {items &&
              items.length > 0 &&
              items.map((item, i) => {
                return (
                  <div
                    className={`section_item ${style.text_image} ${
                      get(item, "image_position") === "left"
                        ? `col_66_33 ${style.left_side}`
                        : `col_33_66`
                    }`}
                    key={`text_img_${i}`}
                  >
                    {i + 1 !== items.length && (
                      <div className={`section_item_border_bottom`}></div>
                    )}
                    <div className={`section_border_middle`}></div>
                    <div
                      className={`${style.left} ${colorClass[item.bg_color]}`}
                    >
                      {ready ? (
                        <>
                          <EqualHeightElement name="TextImageSliderContent">
                            <div className={style.abs}>
                              <LazyLoad className={style.content}>
                                <div className={style.title}>{item.title}</div>
                                {item.type === "details" ? (
                                  <>
                                    <h3 className={style.h3}> Details </h3>
                                    {item.list_tems.map((value, j) => {
                                      const { icon = false, text = false } =
                                        value;
                                      if (icon) {
                                        return (
                                          <div
                                            className={`${
                                              get(item, "className", false)
                                                ? `${
                                                    style[
                                                      get(
                                                        item,
                                                        "className",
                                                        false
                                                      )
                                                    ]
                                                  } `
                                                : ""
                                            }${style.text_wrap}`}
                                            key={`about_${j}`}
                                          >
                                            <div className={style.flex}>
                                              <div className={style.list_icon}>
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
                                                    value.type
                                                      ? value.type + ":"
                                                      : ""
                                                  }${value.link}`}
                                                  className={style.link}
                                                >
                                                  {value.linkLabel ||
                                                    value.link}
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
                                    })}
                                  </>
                                ) : (
                                  <div className={style.text}>{item.text}</div>
                                )}
                                {item.hide_button ? (
                                  <></>
                                ) : (
                                  <div className={style.button}>
                                    <Button
                                      buttonType={
                                        item.white_button === true
                                          ? "transparent_btn"
                                          : ""
                                      }
                                      className={`${style.btn_padd} ${
                                        btn_classes[item.button_type]
                                      }`}
                                      onClick={item.on_button_click}
                                      label={item.button_label}
                                      link={item.button_url}
                                    />
                                  </div>
                                )}
                              </LazyLoad>
                            </div>
                          </EqualHeightElement>
                        </>
                      ) : null}
                      <div className={`section_border_bottom`}></div>
                    </div>
                    <div className={style.right}>
                      <EqualHeightElement name="TextImageSliderContent">
                        <Slider className="text_slider" swiperRef={swiperRef}>
                          {preview_type === "pdf" ? (
                            <PDFViewer
                              pdfImages={pdfImages}
                              setPdfImages={setPdfImages}
                              swiperRef={swiperRef}
                              list={item.list}
                              setActive={setActive}
                              active={active}
                            />
                          ) : (
                            <>
                              <Splide
                                options={sliderOptions}
                                ref={swiperRef}
                                onMoved={(e, prev) => setActive(prev)}
                                aria-label="My Favorite Images"
                              >
                                {item.list.map((item, i) => (
                                  <SplideSlide key={item.image}>
                                    <div className={style.img}>
                                      <div className={style.img_wrap}>
                                        <div className={style.sizer} />
                                        <Media src={item.image} />
                                      </div>
                                    </div>
                                    {/* <Media src={item.image} /> */}
                                  </SplideSlide>
                                ))}
                              </Splide>
                              <div className={style.bottom}>
                                <div className={style.caption}>
                                  {item.caption || "Image caption goes here"}
                                </div>
                                <div className={style.icons}>
                                  {item.list.map((item, i) => (
                                    <div
                                      className={`${style.icon}${
                                        active === i ? ` ${style.active}` : ""
                                      }`}
                                      key={i}
                                      onClick={() => {
                                        swiperRef.current.splide.go(i);
                                      }}
                                    ></div>
                                  ))}
                                </div>
                              </div>
                            </>
                          )}
                        </Slider>
                      </EqualHeightElement>
                    </div>
                  </div>
                );
              })}
          </LazyLoad>
        </div>
      </EqualHeight>
    </>
  );
};

const PDFViewer = ({
  list,
  item,
  swiperRef,
  active,
  setActive,
  pdfImages,
  setPdfImages,
}) => {
  const getPdf = async () => {
    try {
      const mappedImages = list.map(async (fileObj) => {
        return new Promise(async (res, rej) => {
          try {
            let images = [];
            const pdf = await pdfjs.getDocument({
              url: fileObj.image,
            }).promise;
            const canvas = document.createElement("canvas");
            for (let i = 0; i < pdf.numPages; i++) {
              const page = await pdf.getPage(i + 1);
              const viewport = page.getViewport({ scale: 1 });
              const context = canvas.getContext("2d");
              canvas.height = viewport.height;
              canvas.width = viewport.width;
              await page.render({ canvasContext: context, viewport: viewport })
                .promise;
              images = [...images, canvas.toDataURL()];
              res({
                url: images[0],
                caption: fileObj.caption,
                originLink: fileObj.image,
              });
            }
          } catch (err) {
            rej(err);
          }
        });
      });

      const results = await Promise.all(mappedImages);
      setPdfImages(results);
    } catch (err) {}
  };

  useEffect(() => {
    getPdf();
  }, []);

  return pdfImages.length ? (
    <>
      <Splide
        options={sliderOptions}
        ref={swiperRef}
        onMoved={(e, prev) => setActive(prev)}
        aria-label="My Favorite Images"
      >
        {pdfImages.map((item) => (
          <>
            <SplideSlide key={item.caption}>
              <div className={style.img}>
                <div className={style.img_wrap}>
                  <div className={style.sizer} />
                  <NormalLink link={item.originLink} target="_blank">
                    <Media className={style.pdf} src={item.url} />
                  </NormalLink>
                </div>
              </div>
            </SplideSlide>
          </>
        ))}
      </Splide>
      <div className={style.bottom}>
        <div className={style.caption}>
          {pdfImages[active].caption || "Image caption goes here"}
        </div>
        <div className={style.icons}>
          {pdfImages.map((item, i) => (
            <div
              className={`${style.icon}${
                active === i ? ` ${style.active}` : ""
              }`}
              key={i}
              onClick={() => {
                swiperRef.current.splide.go(i);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  ) : null;
};
export default TextImageSlider;
