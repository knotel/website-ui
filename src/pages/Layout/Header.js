import React, { lazy, useEffect, useState } from "react";
import Button from "../../components/Field/Button.js";
import style from "./style.module.css";
import NormalLink from "../../components/NormalLink";
import $ from "jquery-slim";
import { get } from "lodash";
import DialogBox from "../../components/DialogBox";
import Center from "../../components/Center";

import LazyLoad from "../../components/Lazyload";

const Header = ({
  width = 0,
  offset = 0,
  setOpenForm,
  logo,
  close_icon,
  links,
}) => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  // const { header = {} } = useSelector((state) => get(state, `storage`));
  // const links = get(header, 'links', []);

  useEffect(() => {
    if (open === false && $("#menu_close").length) {
      $("#menu_close").click();
    } else if (open === true) {
      setMenu(true);
    }
  }, [open, setMenu]);

  useEffect(() => {
    $(`.${style.menu_links}`).click(() => {
      setOpen(false);
    });
  });

  return (
    <>
      <div className={`${style.header}`}>
        <div className={`c has_border`}>
          <div className={style.header_wrap}>
            <div className={style.header_logo}>
              <NormalLink link="/">
                <img src={logo} alt="Knotel" />
              </NormalLink>
            </div>
            <div className={style.header_menu_wrap}>
              {links.map((item) => (
                <NormalLink className={style.header_menu} link={item.url}>
                  {item.text}
                </NormalLink>
              ))}
              <div className={style.header_btn}>
                <Button
                  buttonType="header_blue_btn"
                  onClick={() => {
                    setOpenForm("enquire-form");
                  }}
                  label="Enquire"
                ></Button>
              </div>
            </div>
            <NormalLink
              className={`${style.burgermenu} ${
                open === true ? style.burgermenu_close : " "
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setOpen((prevOpen) => {
                  return !prevOpen;
                });
              }}
            >
              <div className={style.burgerdiv}>
                <span className={style.lines}></span>
              </div>
            </NormalLink>
          </div>
        </div>
      </div>
      {menu === true && (
        <DialogBox
          close_icon={close_icon}
          classes={style.mobileMenu}
          showClose={false}
          onClose={() => setMenu(false)}
          burgerMenu={true}
          content={(onClose) => (
            <LazyLoad
              lazyLoadClass={`section_wrap`}
              animatedClass="animated"
              rootMargin="-20%"
            >
              <div
                style={{ paddingTop: offset }}
                className={style.mobile_menu_center}
              >
                <div className={style.menu_padd}>
                  <NormalLink className={style.menu_links} link="/">
                    Home
                  </NormalLink>
                  <NormalLink className={style.menu_links} link="/office">
                    Office
                  </NormalLink>
                  <NormalLink className={style.menu_links} link="/workclub">
                    Workclub
                  </NormalLink>
                  <div className={style.header_btn}>
                    <Button
                      buttonType="header_blue_btn"
                      onClick={() => {
                        setOpenForm("enquire-form");
                      }}
                      label="Enquire"
                    ></Button>
                  </div>
                </div>
                <button
                  id="menu_close"
                  onClick={() => onClose()}
                  style={{ display: "none" }}
                ></button>
              </div>
            </LazyLoad>
          )}
        />
      )}
    </>
  );
};

export default Header;
