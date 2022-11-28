import React from 'react';
import Spinner from '../Spinner';
import style from './style.module.css';

const WhiteLoader = ({ minHeight = "120px", backgroundColor = "#fff" }) => {
    return (
        <div className={`${style.whiteLoader}`} style={{ minHeight: minHeight, backgroundColor: backgroundColor }}>
            <div className={`${style.loading}`}>
                <Spinner />
            </div>
        </div>
    )
}

export default WhiteLoader;