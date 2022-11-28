import React from 'react';
import { chunk } from 'lodash';

import Media from '../../../components/Media';
import NormalLink from '../../../components/NormalLink';
import LazyLoad from '../../../components/Lazyload';

import style from './style.module.css';


const MenuSection = ({ items = [] }) => {
    const chunks = chunk(items, 2);

    if (!items || items.length <= 0) {
        return null;
    }

    return (
        <div className={`c has_border`}>
            <LazyLoad lazyLoadClass={`section_wrap col_2`} animatedClass='animated' rootMargin='-20%'>
                <div className={`section_border_top`}></div>
                <div className={`section_border_left`}></div>
                <div className={`section_border_right`}></div>
                <div className={`section_border_bottom`}></div>
                <div className={`section_border_middle`}></div>
                {
                    chunks.map((items, cIndex) => (
                        items.map((item, index) => {
                            let islastRow = false;
                            if (chunks.length === cIndex + 1) {
                                islastRow = true;
                            }
                            return (
                                <NormalLink className={`section_item ${style.item}`} key={`menu_${index}`}>
                                    <LazyLoad className={`${style.item_inner_wrap}`}>
                                        {!islastRow && (index % 2 === 0) && <div className={`section_item_border_bottom`}></div>}
                                        <div className={style.item_content_wrap}>
                                            <div className={style.item_bg}>
                                                <div className={style.sizer} />
                                                <Media className={style.item_img} src={item.image} size="608x472px" />
                                            </div>
                                            <div className={style.text_wrap}>
                                                <div className={`section_title`}>{item.title}</div>
                                                <div className={style.section_text}>
                                                    <div className={style.icon}>
                                                        <i className="fas fa-arrow-right"></i>
                                                    </div>
                                                    <div className={style.text}>{item.text}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </LazyLoad>
                                </NormalLink>
                            )
                        })
                    ))}
            </LazyLoad>
        </div>
    )
}

export default MenuSection;