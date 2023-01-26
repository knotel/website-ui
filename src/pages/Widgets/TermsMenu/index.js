import React from "react";
import { get } from "lodash";
import { useRouter } from "next/router";

import NormalLink from "../../../components/NormalLink";
import { Field, Form } from "react-final-form";
import { OnChange } from "react-final-form-listeners";
import { Dropdown } from "../../../components/Field";

import style from "./style.module.css";

const TermsMenu = ({ items = [], pathname }) => {
  let selected = items.find((i) => i.link === pathname);
  let data = {};
  items.forEach((item, index) => {
    data = {
      ...data,
      [index]: item.label,
    };
  });

  const router = useRouter();

  return (
    <div className={`c has_border`}>
      <div className={style.terms_section}>
        {items.map((item, i) => (
          <NormalLink
            link={item.link}
            className={`${style.menu_label} ${
              get(selected, "link") === get(item, "link")
                ? ` ${style.active}`
                : ""
            }`}
            key={`terms_menu_${i}`}
          >
            {item.label}
          </NormalLink>
        ))}
      </div>
      <div className={style.filter}>
        <Form
          onSubmit={(data) => console.log(data)}
          render={({ handleSubmit, values }) => {
            return (
              <>
                <form
                  name="privacypolicy_filter"
                  className={style.form}
                  onSubmit={handleSubmit}
                >
                  <Field
                    name="city"
                    component={Dropdown}
                    prompt="Terms of Use"
                    options={data}
                    onChange={() => alert("sdyghiu")}
                  />
                  <OnChange name="city">
                    {(value) => {
                      if (get(items, `${value}.link`)) {
                        router.push(items[value].link);
                      }
                    }}
                  </OnChange>
                </form>
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

export default TermsMenu;
