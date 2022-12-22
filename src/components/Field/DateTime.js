import React, { useEffect, useState } from "react";
import { get } from "lodash";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";

import moment from "moment";
import Label from "./Label";
import Error from "./Error";

import style from "./style.module.css";

const PopperContainer = ({ children }) =>
  ReactDOM.createPortal(children, document.querySelector("body"));

const DateTime = (props) => {
  const {
    input,
    required = false,
    classes = false,
    label = false,
    meta: { error, touched },
    showTimeSelect = false,
    dateFormat = "dd MMM yyyy",
    showTimeSelectOnly = false,
    showYearDropdown = false,
    showYearPicker = false,
    placeholder = "Available From",
    emptyValue = true,
    add12Hours = false,
  } = props;
  const [value, setValue] = useState(
    props.input.value
      ? moment(props.input.value * 1000).toDate()
      : props.emptyValue
      ? ""
      : moment().toDate()
  );

  const onChangeHandler = (value) => {
    input.onChange(getDefaultValue(value));
  };

  const getDefaultValue = (value) => {
    let targetVal = Math.floor(moment.unix(value).valueOf() / 1000000);
    if (!targetVal && emptyValue) {
      targetVal = "";
    }
    if (add12Hours && targetVal) {
      targetVal = targetVal + 7200;
    }
    return targetVal;
  };

  useEffect(() => {
    if (!get(input, "value")) {
      input.onChange(getDefaultValue(value));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const inputvalue = get(input, "value");
    setValue(
      inputvalue
        ? moment(inputvalue * 1000).toDate()
        : emptyValue
        ? ""
        : moment().toDate()
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [get(input, "value")]);

  return (
    <div
      className={`${style.date_time} ${style.formGroup} ${
        touched && error ? " " + style.hasError : ""
      }`}
    >
      {label && <Label text={label} required={required} focus={true} />}
      <DatePicker
        popperContainer={PopperContainer}
        placeholderText={placeholder}
        selected={value}
        onChange={onChangeHandler}
        dateFormat={dateFormat}
        showTimeSelect={showTimeSelect}
        showTimeSelectOnly={showTimeSelectOnly}
        showYearDropdown={showYearDropdown}
        showYearPicker={showYearPicker}
      />
      <span className={`${style.dropdownIcon} ${style.middle}`}>
        <i className="fas fa-chevron-down"></i>
      </span>

      <Error {...props} />
    </div>
  );
};
export default DateTime;
