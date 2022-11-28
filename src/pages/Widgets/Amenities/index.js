import React from 'react';
import { chunk } from 'lodash';

import Media from '../../../components/Media';
import NormalLink from '../../../components/NormalLink';
import LazyLoad from '../../../components/Lazyload';

import style from './style.module.css';


const Amenities = ({ heading, items = [] }) => {
    const chunks = chunk(items, 3);

    if (!items || items.length <= 0) {
        return null;
    }

    return (
        <div className={`c has_border`}>
            <div className={`section_title ${style.head}`}>{heading}</div>
            <LazyLoad lazyLoadClass={`section_wrap col_3`} animatedClass='animated' rootMargin='-20%'>
                <div className={`section_border_top`}></div>
                <div className={`section_border_left`}></div>
                <div className={`section_border_right`}></div>
                <div className={`section_border_bottom`}></div>
                <div className={`section_border_middle`}></div>
                {items.length >= 2 && <div className={`section_border_middle_2`}></div>}
                {
                    chunks.map((items, cIndex) => (
                        items.map((item, index) => {
                            const curIndex = index + 1;
                            let islastRow = false;
                            if (chunks.length === cIndex + 1) {
                                islastRow = true;
                            }
                            return (
                                <div className={`section_item ${style.item} ${curIndex % 3 === 0 ? ` no_border_right` : ``} ${islastRow ? `last_row` : ``}`} key={`amenities_${index}`}>
                                    {!islastRow && (index % 3 === 0) && <div className={`section_item_border_bottom`}></div>}
                                    <div className={style.wrap}>
                                        <div className={style.item_bg}>
                                            <div className={style.sizer} />
                                            <Media className={style.item_img} src={item.image} size="608x472px" />
                                        </div>
                                    </div>
                                    <div className={style.title}>{item.title}</div>
                                    <div className={style.text}>{item.text}</div>
                                    <NormalLink className={style.link}>Find Out More</NormalLink>
                                </div>
                            )
                        })
                    ))}
            </LazyLoad>
        </div>
    )
}

export default Amenities;