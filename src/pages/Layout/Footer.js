import React, { useState } from "react";
import { get } from "lodash";

import { data } from "../../helpers/mock";
import { logo } from "../../components/Images.js";

import Button from "../../components/Field/Button";
import NewsLetter from "../../components/NewsLetter";
import NormalLink from "../../components/NormalLink";

import style from "./style.module.css";
import knotelLogoRound from '../../assets/images/KnotelLogoRound.png'
const Footer = ({ footerProps }) => {
  const {
    footerLinks,
    socials,
    subscribeLabel,
    contactEmail,
    footerLeftText,
    footerRightText,
    newsLetterForm,
  } = footerProps;

  const [open, setOpen] = useState(false);

  return (
    <div className={`c has_border`}>
      <div className={style.footer} role="contentinfo">
        <div className={style.footer_wrap}>
          <div className={`${style.f_mobile} ${style.footer_left}`}>
            <NormalLink className={style.footer_logo}>
              <img src={footerProps.logo} alt="knotel" />
            </NormalLink>
            <div>
              <NormalLink
                link={`mailto:${contactEmail}`}
                className={style.footer_email}
              >
                {contactEmail}
              </NormalLink>
            </div>
            <div className={style.footer_row}>
              <div classname={"knotelroundimage"}>
                <img
                  src="https://images.ctfassets.net/5tq979orlb7f/fzxRUDEJiyi1bnSHt4oSE/cffa080783ff5f93cb0bb46bb6889800/KnotelLogoRound.png"
                  alt="knotel brand"
                />
              </div>
              <span>
                <div className={style.brand_mark_footer}>HEADQUARTERS</div>
                <div className={style.brand_mark_footer}>AS A SERVICE</div>
              </span>
            </div>
            {/* <div className={style.f_button}>
              <Button
                id={"subscribeTrigger"}
                onClick={() => {
                  setOpen(true);
                }}
                label={subscribeLabel}
              />
            </div> */}
            {open === true && (
              <NewsLetter
                onSubmit={newsLetterForm.onSubmit}
                submitting={newsLetterForm.submitting}
                submitted={newsLetterForm.submitted}
                content={newsLetterForm.content}
                onClose={() => setOpen(false)}
              />
            )}
            <div className={style.socials}>
              {socials &&
                socials.length > 0 &&
                socials.map((item, i) => (
                  <div className={style.social_padd} key={`f_s_${i}`}>
                    <NormalLink link={item.link} className={style.social_logo}>
                      <span className={style.social_icon}>
                        <i className={item.icon} />
                      </span>
                    </NormalLink>
                  </div>
                ))}
            </div>
          </div>
          {footerLinks &&
            footerLinks.length > 0 &&
            footerLinks.map((item, i) => (
              <div
                role="navigation"
                aria-labelledby={`footer_${item.title}`}
                className={`${style.f_mobile} ${style.footer_col}`}
                key={`f_title_${i}`}
              >
                <div id={`footer_${item.title}`} className={style.footer_title}>
                  {item.title}
                </div>
                {item.links.map((linkItem, j) => (
                  <div
                    className={style.footer_link_item}
                    key={`f_title_${i}_${j}`}
                  >
                    <NormalLink link={linkItem.link}>
                      {linkItem.label}
                    </NormalLink>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
      <div className={style.footer_bottom}>
        <div>{footerLeftText}</div>
        <div className={style.copyright}>{footerRightText}</div>
      </div>
    </div>
  );
};

export default Footer;
