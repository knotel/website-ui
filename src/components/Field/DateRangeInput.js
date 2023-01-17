import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { get } from "lodash";

import Label from "./Label";
import Error from "./Error";
import Button from "./Button";
import { convertDateToUnix, formatDate } from "../../helpers/date";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import style from "./style.module.css";

let wrapperRef;

let d = new Date();
d.setDate(d.getDate() - 30);
const initialSD = d;
const initialED = new Date();

const DateRangeInput = (props) => {
  const {
    input,
    label = false,
    required,
    meta: { error, touched },
    placeholder,
  } = props;
  const [startDate, setStartDate] = useState(initialSD);
  const [endDate, setEndDate] = useState(initialED);
  const [picker, setPicker] = useState(false);

  const setWrapperRef = (node) => {
    wrapperRef = node;
  };

  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.contains(event.target)) {
      setPicker(false);
    }
  };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const handleSelect = (ranges) => {
    const {
      selection: { startDate, endDate },
    } = ranges;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const toggleDatePicker = () => {
    setPicker(!picker);
  };

  let sd = get(input, "value.startDate");
  let ed = get(input, "value.endDate");
  if (sd) {
    sd = formatDate(sd);
  }
  if (ed) {
    ed = formatDate(ed);
  }

  return (
    <div
      ref={setWrapperRef}
      className={`${style.formGroup}${
        touched && error ? " " + style.hasError : ""
      }`}
    >
      {label !== false && <Label text={label} required={required} />}
      <div
        className={`${style.inputWrap} ${style.dateRangeInput}`}
        onClick={toggleDatePicker}
      >
        {sd && ed ? (
          <div className={`${style.textbox}`}>
            {sd} - {ed}
          </div>
        ) : (
          <div className={`${style.textbox} ${style.placeholder}`}>
            {placeholder}
          </div>
        )}
        <i className={`${style.icon} ${style.calendar} ${style.inputIcon}`} />
      </div>
      {picker && (
        <div className={`${style.floatingDateRange}`}>
          <Button
            label="Clear"
            classes={`${style.active} ${style.dateRageClear}`}
            onClick={() => {
              input.onChange("");
              setStartDate(initialSD);
              setEndDate(initialED);
              setPicker(false);
            }}
          />
          <Button
            label="Done"
            classes={`${style.active} ${style.dateRageDone}`}
            onClick={() => {
              input.onChange({
                startDate: convertDateToUnix(startDate),
                endDate: convertDateToUnix(endDate),
              });
              toggleDatePicker();
            }}
          />
          <DateRange
            ranges={[
              {
                startDate: startDate,
                endDate: endDate,
                key: "selection",
              },
            ]}
            onChange={handleSelect}
            months={2}
            rangeColors={["#151C4E"]}
          />
        </div>
      )}
      <Error {...props} />
    </div>
  );
};
export default DateRangeInput;
