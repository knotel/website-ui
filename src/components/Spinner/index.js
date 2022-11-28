import React from 'react';
import style from './style.module.css';

const getSize = (size) => {
    if (size === "large") {
        return {
            width: 36,
            height: 36
        }
    }

    if (size === "ultra-large") {
        return {
            width: 50,
            height: 50
        }
    }

    return {
        width: 20,
        height: 20
    }
}

const Spinner = ({ color = '#8C8C8C', size = 'small' }) => {
    return (
        <div className={style.spinner} style={getSize(size)}>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
            <div className={style.spinnerBlade} style={{ backgroundColor: color }}></div>
        </div>
    );
}
export default Spinner;