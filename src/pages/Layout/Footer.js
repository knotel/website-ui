import React, { lazy, Suspense, useState } from 'react'
import { get } from 'lodash'

import { data } from '../../helpers/mock'
import { logo } from '../../components/Images.js'

import Button from '../../components/Field/Button'
import NewsLetter from '../../components/NewsLetter'

import style from './style.module.css'

const NormalLink = lazy(() => import('../../components/NormalLink'))

const Footer = ({ footerProps }) => {
  const {
    footerLinks,
    socials,
    subscribeLabel,
    contactEmail,
    footerLeftText,
    footerRightText,
    newsLetterForm
  } = footerProps

  const [open, setOpen] = useState(false)

  return (
    <div className='c has_border'>
      <Suspense fallback={<></>}>
        <div className={style.footer_wrap}>
          <div className={style.footer_left}>
            <NormalLink className={style.footer_logo}>
              <img src={footerProps.logo} alt='knotel' />
            </NormalLink>
            <NormalLink className={style.footer_email}>
              {contactEmail}
            </NormalLink>
            <div className={style.f_button}>
              <Button
                onClick={() => {
                  setOpen(true)
                }}
                label={subscribeLabel}
              />
            </div>
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
              <div className={style.footer_col} key={`f_title_${i}`}>
                <div className={style.footer_title}>{item.title}</div>
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
        <div className={style.footer_bottom}>
          <div>{footerLeftText}</div>
          <div>{footerRightText}</div>
        </div>
      </Suspense>
    </div>
  )
}

export default Footer
