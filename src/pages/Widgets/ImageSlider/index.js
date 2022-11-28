import React, { useRef } from 'react';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '../../../components/Field'
import Media from '../../../components/Media';
import NormalLink from '../../../components/NormalLink';
import Slider from '../../../components/Slider';

import style from './style.module.css';

const swiperSlideClick = (swiper, items, action = 'next') => {
    let nextSlide = swiper.activeIndex + 1;
    let prevSlide = swiper.activeIndex - 1;
    prevSlide = prevSlide > -1 ? prevSlide : 0;
    if (nextSlide >= items.length) {
        nextSlide = 0;
    }
    swiper.slideTo(action === "prev" ? prevSlide : nextSlide);
}

// let selected = items.find(i => i.location === );

const ImageSlider = ({ options, items = [], delay = 10000 }) => {
    console.log(items)
    const swiperRef = useRef(null);
    return (
        <div className={`c has_border`}>
            <div className={style.slider_head}>
                <div className={style.location}>Locations</div>
                <div className={style.options}>
                    {options.map((option, i) => (
                        <Button className={style.option} label={option} key={`country_${i}`}></Button>
                    ))}
                </div>
            </div>
            <Slider swiperRef={swiperRef}>
                <div className={style.slider}>
                    <Swiper
                        ref={swiperRef}
                        modules={[A11y]}
                        spaceBetween={16}
                        slidesPerView={3}
                    >
                        {
                            items.map((item, i) => {
                                return (
                                    <SwiperSlide className={`section_item ${style.item}`} key={`location_${i}`}>
                                        <div className={style.item_content}>
                                            <div className={style.item_bg}>
                                                <div className={style.sizer} />
                                                <Media className={style.item_img} src={item.image} size="608x472" />
                                            </div>
                                            <div className={style.text_wrap}>{item.title}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <div className={style.prev}>
                        <NormalLink className={style.slider_icon} onClick={() => swiperSlideClick(swiperRef.current.swiper, items, 'prev')}>
                            <span className={style.icon}><i className="fas fa-arrow-left"></i></span>
                        </NormalLink>
                    </div>
                    <div className={style.next}>
                        <NormalLink className={style.slider_icon} onClick={() => swiperSlideClick(swiperRef.current.swiper, items)}>
                            <span className={style.icon}><i className="fas fa-arrow-right"></i></span>
                        </NormalLink>
                    </div>
                </div>
            </Slider>

        </div >
    )
}

export default ImageSlider;