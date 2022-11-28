import React from 'react';

import Media from '../../../components/Media';
import { Button } from '../../../components/Field';
import LazyLoad from '../../../components/Lazyload';

import style from './style.module.css';
import { get } from 'lodash';

const TextImage = ({ items = [] }) => {

    if (!items || items.length <= 0) {
        return null;
    }
    return (
        <div className={`c`}>
            <LazyLoad lazyLoadClass={`section_wrap`} animatedClass='animated' rootMargin='-20%'>
                <div className={`section_border_top`}></div>
                <div className={`section_border_left`}></div>
                <div className={`section_border_right`}></div>
                <div className={`section_border_bottom`}></div>
                {items && items.length > 0 && items.map((item, i) => (
                    <div className={`${style.section} ${get(item, 'image_position') === 'right' ? `col_50_50 ${style.right_side}` : `col_50_50`}`} key={`text_img_${i}`}>
                        {((i + 1) !== items.length) && <div className={`section_item_border_bottom`}></div>}
                        <div className={`section_border_middle`}></div>
                        <div className={style.left}>
                            <div className={style.img_wrap}>
                                <div className={style.sizer} />
                                <Media src={item.image} size="608x472px" />
                            </div>
                        </div><LazyLoad className={style.right}>
                            <div className={style.content}>
                                <div className={style.title}>{item.title}</div>
                                <div className={style.text}>{item.text}</div>
                                <div className={style.button}>
                                    <Button className={style.btn_padd} label={item.button_label} link={item.button_url} />
                                </div>
                            </div>
                        </LazyLoad>
                    </div>
                ))}
            </LazyLoad>
        </div>
    )
}

export default TextImage;
