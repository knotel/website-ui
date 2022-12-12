import React, { useEffect, useState } from "react";
import { get } from "lodash";
import $ from "cash-dom";

import Label from "./Label";
import Error from "./Error";

import style from "./style.module.css";

let wrapperRef;

const MultiSelectDropdown = (props) => {
  const {
    label,
    options,
    meta: { error, touched },
    input,
    serverError = "",
    required = false,
    placeholder = "Please select...",
    allOptionsNeeded = false,
    onSelectChange,
  } = props;
  const [selectedOptions, setSelectedOptions] = useState(
    get(props, "placeholder", "Please select...")
  );
  const [open, setOpen] = useState("");

  const setWrapperRef = (node) => {
    wrapperRef = node;
  };

  useEffect(() => {
    setLabel();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLabel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [get(input, "value"), options]);

  const setLabel = () => {
    const { name, value } = input;
    if (options) {
      $(`.${name}_multidd_chkbox`).prop("checked", false);
      if ($.isArray(value) && value.length > 0) {
        let l = [];
        value.map((item) => {
          if (options[item]) {
            l.push(options[item]);
            $(`#${name}_${item}`).prop("checked", true);
          }
          return true;
        });
        setSelectedOptions(l.length ? l.join(", ") : placeholder);
      } else {
        setSelectedOptions(placeholder);
      }
    }
  };

  const onChangeHandler = (event, key) => {
    let newValue = [...input.value];

    if (event.target.checked) newValue.push(key);
    else newValue.splice(newValue.indexOf(key), 1);

    if (onSelectChange) {
      onSelectChange(newValue);
    }
    return input.onChange(newValue);
  };

  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.contains(event.target)) {
      setOpen("");
    }
  };

  return (
    <div
      ref={setWrapperRef}
      className={`${style.formGroup} ${style.multipleDropdown}${open}${
        touched && (error || serverError) ? " " + style.hasError : ""
      }`}
    >
      <Label text={label} focus={true} required={required} />
      <div className={`${style.field}`}>
        <a
          className={`${style.textbox} ${style.selectedOption} ${
            selectedOptions === placeholder ? " " + style.placeholder : ""
          }`}
          onClick={() => setOpen(open === "" ? " " + style.ddoptionsOpen : "")}
          href={false}
        >
          <span>{selectedOptions}</span>
          <span className={`${style.dropdownArrow}`}>
            <i className={`fas fa-chevron-down`}></i>
          </span>
        </a>
        <div className={`${style.ddoptions}`}>
          <div className={`${style.ddoptionsList} ${style.inputCheckbox}`}>
            {allOptionsNeeded && (
              <div className={`${style.ddoption}`}>
                <input
                  type="checkbox"
                  className={`${input.name}_multidd_chkbox`}
                  id={`${input.name}_all`}
                  name={`${input.name}[all]`}
                  value="all"
                  onChange={(e) => {
                    if (e.target.checked) {
                      if (onSelectChange) {
                        onSelectChange(Object.keys(options));
                      }
                      return input.onChange(Object.keys(options));
                    } else {
                      if (onSelectChange) {
                        onSelectChange("");
                      }
                      return input.onChange("");
                    }
                  }}
                  checked={
                    input.value &&
                    input.value.length === Object.keys(options).length
                  }
                />
                <label
                  htmlFor={`${input.name}_all`}
                  className={`${style.inputCheckboxLabel}`}
                >
                  <div className={style.checkboxSquare}>
                    <div className={style.checkboxCenter}>
                      <i className="fas fa-square"></i>
                    </div>
                  </div>
                  <div className={style.checkboxLabel}>Select All</div>
                </label>
              </div>
            )}
            {options &&
              Object.entries(options).map(([key, value]) => (
                <div className={`${style.ddoption}`} key={key}>
                  <input
                    type="checkbox"
                    className={`${input.name}_multidd_chkbox`}
                    id={`${input.name}_${key}`}
                    name={`${input.name}[]`}
                    value={key}
                    onChange={(e) => onChangeHandler(e, key)}
                  />
                  <label
                    htmlFor={`${input.name}_${key}`}
                    className={`${style.inputCheckboxLabel}`}
                  >
                    <div className={style.checkboxSquare}>
                      <div className={style.checkboxCenter}>
                        <i className="fas fa-square"></i>
                      </div>
                    </div>
                    <div className={style.checkboxLabel}>{value}</div>
                  </label>
                </div>
              ))}
          </div>
        </div>
        <Error {...props} />
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
