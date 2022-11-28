import React from 'react';

import Media from '../../../components/Media';
import Button from '../../../components/Field/Button'

import style from './style.module.css';

const LeftRightBanner = ({ title, text, image, bg_color, button_label, button_url, whiteButton = false, border_line = false }) => {
    const colorClass = {
        "green": style.greenBg,
        "darkblue": style.blueBg,
    }
    return (
        <div className={`c`}>
            <div className={border_line === true ? `${style.banner} ${style.border_line}` : `${style.banner}`}>
                <div className={style.left_right_banner}>
                    <div className={`${style.left} ${colorClass[bg_color]}`}>
                        <div className={style.content_wrapper}>
                            <div className={style.title}>{title}</div>
                            <div className={style.text}>{text}</div>
                            <div className={style.banner_btn}>
                                <Button buttonType={whiteButton === true ? "white_btn" : "banner_btn"} label={button_label} link={button_url} />
                            </div>
                        </div>
                    </div>
                    <div className={style.right}>
                        <Media className={style.banner_image} src={image} size="920x600px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftRightBanner;
