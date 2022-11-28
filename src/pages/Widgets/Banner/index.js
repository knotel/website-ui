import React from 'react';

import Media from "../../../components/Media";

import style from './style.module.css';

const Banner = ({ image, title, text }) => {
    return (
        <div className={`c`}>
            <div className={style.banner}>
                <Media src={image} size="2560x1124" />
                <div className={style.content}>
                    <div className={style.title}>{title}</div>
                    <div className={style.text}>{text}</div>
                </div>
            </div>
        </div>
    )
}

export default Banner;