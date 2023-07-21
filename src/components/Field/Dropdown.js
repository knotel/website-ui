import React, { useEffect, useState } from "react";
import { get } from "lodash";

import Label from "./Label";
import Error from "./Error";

import style from "./style.module.css";

const Dropdown = (props) => {
  const {
    label = false,
    required,
    classes = false,
    options = {},
    input,
    meta: { error, touched },
    serverError = "",
    placeholder = true,
    icon = true,
    defaultOption = false,
    onDropdownChange,
    prompt,
    iconclass = false,
  } = props;

  const getPrompt = () => {
    if (placeholder === false) {
      return defaultOption || get(Object.values(options), "[0]", "");
    }
    return prompt || "Please select...";
  };

  const [sprompt] = useState(getPrompt());
  const [valueEntered, setValueEntered] = useState(
    get(options, input.value) || ""
  );

  const onChangeHandler = (event) => {
    input.onChange(event);
    if (onDropdownChange) {
      onDropdownChange(event.target.value);
    }
  };

  const setDefaultValue = () => {
    const { onChange, value } = input;
    let labels = get(Object.values(options), "[0]", "");
    let selectedValue = get(options, value) || "";
    if (placeholder === false && selectedValue === "" && labels.length) {
      onChange(defaultOption || get(Object.keys(options), "[0]"));
    }
  };

  useEffect(() => {
    setDefaultValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setValueEntered(get(options, get(input, "value")) || "");
    setDefaultValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [get(input, "value"), options]);

  return (
    <div
      className={`${style.formGroup} ${style.dropdown}${
        touched && (error || serverError) ? " " + style.hasError : ""
      }`}
    >
      {label !== false && (
        <Label text={label} required={required} focus={true} />
      )}
      <div className={`${style.textbox}${classes ? " " + classes : ""}`}>
        <span className={style.middle}>{valueEntered || getPrompt()}</span>
        {icon === true && (
          <span
            className={`${
              iconclass === true ? style.dropdownIcon : style.icon
            } ${style.middle}`}
          >
            <i className="fas fa-chevron-down"></i>
          </span>
        )}
      </div>
      <select {...input} className={style.selectBox} onChange={onChangeHandler}>
        {placeholder !== false && <option value="">{sprompt}</option>}
        {options &&
          Object.entries(options).map(([key, value]) => (
            <option value={key} key={key}>
              {value}
            </option>
          ))}
      </select>
      <Error {...props} />
    </div>
  );
};

export default Dropdown;
