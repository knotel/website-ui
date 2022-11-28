import React from 'react';
import { Button } from '../../../components/Field';
import LazyLoad from '../../../components/Lazyload';

import style from './style.module.css';

const Details = ({ items = [] }) => {
    return (
        <>
            <div className={`c has_border`}>
                <LazyLoad lazyLoadClass={`section_wrap col_3`} animatedClass='animated' rootMargin='-20%'>
                    <div className={`section_border_top`}></div>
                    <div className={`section_border_left`}></div>
                    <div className={`section_border_right`}></div>
                    <div className={`section_border_bottom`}></div>
                    <div className={`section_border_middle`}></div>
                    {items.length >= 2 && <div className={`section_border_middle_2`}></div>}
                    <div className={style.section}>
                        {
                            items.map((item, index) => {
                                return (
                                    <div className={`${style.item}`} key={`details_${index}`}>
                                        <div className={style.title}>{item.title}</div>
                                        <div className={style.wrapper}>
                                            {
                                                item.list.map((value, j) => {
                                                    const { button_label = false, icon = false, text = false } = value;
                                                    return (
                                                        <>
                                                            {
                                                                icon && (
                                                                    <div className={style.text_wrap} key={`about_${j}`}>
                                                                        <div className={style.icon}>
                                                                            <img src={value.icon} alt={`${value.label} icon`} />
                                                                        </div>
                                                                        <div className={style.label}>{value.label}</div>
                                                                        <div className={style.value}>{value.value}</div>
                                                                    </div>
                                                                )
                                                            }
                                                            {
                                                                text && <ul className={style.list} key={`list_${j}`}>
                                                                    <li>{value.text}</li>
                                                                </ul>
                                                            }
                                                            {
                                                                button_label && (
                                                                    <div className={style.info} key={`info_${j}`}>
                                                                        <Button className={style.download} svgIcon={value.logo} onClick={() => { }} label={value.button_label} />
                                                                    </div>
                                                                )
                                                            }

                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </LazyLoad>
            </div>
        </>
    )
}

export default Details;