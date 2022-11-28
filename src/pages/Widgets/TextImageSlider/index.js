import React, { useRef } from 'react';
import { get } from 'lodash';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EqualHeight, EqualHeightElement } from 'react-equal-height';

import { Button } from '../../../components/Field';
import Media from '../../../components/Media';
import LazyLoad from '../../../components/Lazyload';
import Slider from '../../../components/Slider';

import style from './style.module.css';

const TextImageSlider = ({ items = [], autoHeight = false, delay = 10000 }) => {
    const swiperRef = useRef(null);
    const colorClass = {
        "green": style.greenBg,
        "darkblue": style.blueBg,
    }

    if (!items || items.length <= 0) {
        return null;
    }

    return (
        <>
            <EqualHeight>
                <div className={`c has_border`}>
                    <LazyLoad lazyLoadClass={`section_wrap`} animatedClass='animated' rootMargin='-20%'>
                        <div className={`section_border_top`}></div>
                        <div className={`section_border_left`}></div>
                        <div className={`section_border_right`}></div>
                        <div className={`section_border_bottom`}></div>
                        {
                            items && items.length > 0 && items.map((item, i) => (
                                <div className={`section_item ${style.text_image} ${get(item, 'image_position') === 'left' ? `col_66_33 ${style.left_side}` : `col_33_66`}`} key={`text_img_${i}`}>
                                    {((i + 1) !== items.length) && <div className={`section_item_border_bottom`}></div>}
                                    <div className={`section_border_middle`}></div>
                                    <div className={`${style.left} ${colorClass[item.bg_color]}`}>
                                        <EqualHeightElement name="TextImageSliderContent">

                                            <div className={style.abs}>
                                                <LazyLoad className={style.content}>
                                                    <div className={style.title}>{item.title}</div>
                                                    <div className={style.text}>{item.text}</div>
                                                    <div className={style.button}>
                                                        <Button buttonType={item.white_button === true ? "transparent_btn" : "block_btn"} label={item.button_label} link={item.button_url} />
                                                    </div>
                                                </LazyLoad>
                                            </div>

                                        </EqualHeightElement>
                                    </div>
                                    <div className={style.right}>
                                        <EqualHeightElement name="TextImageSliderContent">
                                            <Slider className="text_slider" swiperRef={swiperRef}>
                                                <Swiper
                                                    ref={swiperRef}
                                                    modules={[Pagination, Autoplay]}
                                                    autoplay={{ delay }}
                                                    pagination={{ clickable: true }}
                                                    spaceBetween={0}
                                                    slidesPerView={1}
                                                >
                                                    {
                                                        item.list.map((item, i) => (
                                                            <SwiperSlide key={`img_slider_${i}`}>

                                                                <div className={style.img}>
                                                                    <div className={style.img_wrap}>
                                                                        <div className={style.sizer} />
                                                                        <Media src={item.image} />
                                                                    </div>
                                                                </div>

                                                            </SwiperSlide>
                                                        ))
                                                    }
                                                </Swiper>
                                            </Slider>
                                        </EqualHeightElement>
                                    </div>
                                </div>
                            ))
                        }
                    </LazyLoad>
                </div>
            </EqualHeight></>
    )
}

export default TextImageSlider;