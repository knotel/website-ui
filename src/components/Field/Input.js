import React, { useEffect, useState } from "react";
import { get } from "lodash";

import Label from "./Label";
import Error from "./Error";
import Button from "./Button";

import style from "./style.module.css";

const Input = (props) => {
  const {
    label = false,
    required = false,
    meta: { error, touched },
    inputType = "text",
    showsearchicon = false,
    value,
    input,
    meta,
    serverError = "",
    ...other
  } = props;

  const [focus, setFocus] = useState(false);
  const [valueEntered, setValueEntered] = useState(
    get(input, "value", "").toString() ? true : false
  );

  useEffect(() => {
    setValueEntered(get(input, "value", "").toString() ? true : false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [get(input, "value")]);

  const onFocusHandler = () => {
    setFocus(true);
  };

  const onBlurHandler = () => {
    setFocus(false);
  };

  const getInput = () => {
    if (inputType === "textarea") {
      return (
        <textarea
          {...input}
          {...other}
          className={style.textbox}
          onFocus={onFocusHandler}
          onBlur={(e) => {
            input.onBlur(e);
            setTimeout(() => onBlurHandler());
          }}
        ></textarea>
      );
    }
    return (
      <input
        type={inputType}
        {...input}
        {...other}
        defaultValue={value}
        className={style.textbox}
        onFocus={onFocusHandler}
        onBlur={(e) => {
          input.onBlur(e);
          setTimeout(() => onBlurHandler());
        }}
        autoComplete="off"
      />
    );
  };

  return (
    <div
      className={`${style.formGroup}${
        touched && (error || serverError) ? " " + style.hasError : ""
      }`}
    >
      {label !== false && (
        <Label
          text={label}
          required={required}
          focus={focus || valueEntered ? true : false}
        />
      )}
      <div className={`${style.inputWrap}`}>
        {getInput()}
        {showsearchicon && <Button filterSearchIcon={true} />}
      </div>
      <Error {...props} />
    </div>
  );
};
export default Input;
