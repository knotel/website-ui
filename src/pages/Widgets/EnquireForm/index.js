import React from 'react'
import { get } from 'lodash'

import { data } from '../../../helpers/mock'
import ContactForm from '../../../components/ContactForm'

import style from './style.module.css'

const EnquireForm = ({ title, text }) => {
  return (
    <>
      <div className='c'>
        <div className={style.enquire_wrap}>
          <div className={style.left}>
            <div className='section_title'>{title}</div>
            <div
              className={style.text}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
          <div className={style.right}>
            <div className={style.forms}>
              <ContactForm contact={get(data, 'contact', {})} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EnquireForm
