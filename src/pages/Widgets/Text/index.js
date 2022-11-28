import React from 'react';

import Center from '../../../components/Center';
import LazyLoad from '../../../components/Lazyload';

import style from './style.module.css';


const Text = ({ text, bg_color }) => {
    const colorClass = {
        "green": style.greenBg,
        "lightblue": style.lightBlueBg
    }
    return (
        <>
            <div className={`c has_border`}>
                <div className={`${colorClass[bg_color]} ${style.section_border}`}>
                    <Center className={style.block_Center}>
                        <LazyLoad>
                            <div className={style.text} dangerouslySetInnerHTML={{ __html: text }} />
                        </LazyLoad>
                    </Center>
                </div>
            </div>
        </>
    )
}

export default Text;