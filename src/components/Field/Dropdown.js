
import React, { useEffect, useState } from 'react';
import { get, isObject } from 'lodash';

import Label from "./Label";
import Error from "./Error";

import style from './style.module.css';

const Dropdown = (props) => {
    const { label = false, required, classes = false, options = {}, input, meta: { error, touched }, serverError = "", icon = true, onDropdownChange, prompt = false, iconclass = false } = props;
    const [valueEntered, setValueEntered] = useState("");
    const [isOptionGroup, setIsOptionGroup] = useState(false);

    const onChangeHandler = (event) => {
        input.onChange(event);
        if (onDropdownChange) {
            onDropdownChange(event.target.value);
        }
    }

    const getLabel = (skey) => {
        const value = options[skey] || "";
        if (isObject(value)) {
            // Get value from options group
            const keys = Object.keys(value);
            if (keys.length > 0) {
                // Show first value
                return value[keys[0]];
            }
            return "";
        }
        if (!value && isOptionGroup === true) {
            const keys = Object.keys(options);
            for (var i = 0; i < keys.length; i++) {
                const value = options[keys[i]];
                if (isObject(value) && value[skey]) {
                    return keys[i] + " - " + value[skey];
                }
            }
        }
        return value || "";
    }

    const getText = () => {
        const { value } = input;
        const keys = Object.keys(options);
        if (!value) {
            if (prompt !== false) {
                // Show placeholder
                return prompt;
            }
            if (keys.length > 0) {
                // Show first value
                return getLabel(keys[0]);
            }
            return "";
        }
        return getLabel(value);
    }

    useEffect(() => {
        const keys = Object.keys(options);
        for (var i = 0; i < keys.length; i++) {
            if (isObject(options[keys[i]])) {
                setIsOptionGroup(true);
                break;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    useEffect(() => {
        setValueEntered(getText());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input.value, options]);

    return (
        <div className={`${style.formGroup} ${style.dropdown}${touched && (error || serverError) ? " " + style.hasError : ""}`}>
            {
                label !== false && (
                    <Label text={label} required={required} focus={true} />
                )
            }
            <div className={`${style.textbox}${classes ? " " + classes : ""}`}>
                <span className={style.middle}>{valueEntered}</span>
                {
                    icon === true && (
                        <span className={`${iconclass === true ? style.dropdownIcon : style.icon} ${style.middle}`}>
                            <i className="fas fa-chevron-down"></i>
                        </span>
                    )
                }
            </div>
            <select {...input} className={style.selectBox} onChange={onChangeHandler}>
                {
                    prompt !== false && (
                        <option value="">{prompt}</option>
                    )
                }
                {
                    options && Object.entries(options).map(([key, value]) => {
                        if (isObject(value)) {
                            return (
                                <optgroup label={key} key={key}>
                                    {
                                        Object.entries(value).map(([k, v]) => (
                                            <option value={k} key={k}>{v}</option>
                                        ))
                                    }
                                </optgroup>
                            )
                        }
                        return (
                            <option value={key} key={key}>{value}</option>
                        )
                    })
                }
            </select>
            <Error {...props} />
        </div>
    )
}

export default Dropdown; 