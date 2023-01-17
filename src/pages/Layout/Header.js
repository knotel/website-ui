import React from "react";
import Button from "../../components/Field/Button.js";
import style from "./style.module.css";
import NormalLink from "../../components/NormalLink";


const Header = ({ setOpenForm, logo, links }) => {
  return (
    <div className={style.header}>
      <div className={`c has_border`}>
        <div className={style.header_wrap}>
          <div className={style.header_logo}>
            <NormalLink link="/">
              <img src={logo} alt="Knotel" />
            </NormalLink>
          </div>
          <div className={style.header_menu_wrap}>
            {links.map(({ text, url }) => (
              <NormalLink link={url} key={url} className={style.header_menu}>
                {text}
              </NormalLink>
            ))}
            <div className={style.header_btn}>
              <Button
                id={"enquireTrigger"}
                buttonType="header_blue_btn"
                onClick={() => {
                  setOpenForm("enquire-form");
                }}
                label="Enquire"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
