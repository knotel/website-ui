import React, { lazy, Suspense } from "react";
import Button from "../../components/Field/Button.js";
import style from "./style.module.css";
const NormalLink = lazy(() => import("../../components/NormalLink"));

const Header = ({ setOpenForm, logo, links }) => {
  return (
    <div className={style.header}>
      <div className={`c has_border`}>
        <div className={style.header_wrap}>
          <div className={style.header_logo}>
            <Suspense fallback={<></>}>
              <NormalLink link="/">
                <img src={logo} alt="Knotel" />
              </NormalLink>
            </Suspense>
          </div>
          <div className={style.header_menu_wrap}>
            {links.map(({ text, url }) => (
              <NormalLink link={url} key={url} className={style.header_menu}>
                {text}
              </NormalLink>
            ))}
            <div className={style.header_btn}>
              <Button
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
