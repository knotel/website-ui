import React from "react";
import { get } from "lodash";
import { useLocation } from "react-router-dom";

import NormalLink from "../../../components/NormalLink";

import style from "./style.module.css";

const TermsMenu = ({ items = [] }) => {
  const { pathname } = useLocation();
  let selected = items.find((i) => i.link === pathname);
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
    </div>
  );
};

export default TermsMenu;
