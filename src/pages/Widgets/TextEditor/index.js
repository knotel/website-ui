import React from 'react';

import style from './style.module.css'

const TextEditor = ({ text }) => {
    return (
        <div className={`c`}>
            <div className={style.section}>
                <div className={style.text} dangerouslySetInnerHTML={{ __html: text }}></div>
            </div>
        </div>
    )
}
export default TextEditor;