import React, { Suspense } from 'react'
import { Field, Form } from 'react-final-form'

import { Button, Input } from '../Field'
import Media from '../Media'
import DialogBox from '../DialogBox'

import style from './style.module.css'
import { composeValidators } from '../../helpers/input'
import { email, required } from 'redux-form-validators'
import LazyLoad from '../Lazyload'

const NewsLetter = ({ onClose, content, onSubmit, submitting, submitted }) => {
  return (
    <Suspense fallback={<></>}>
      <DialogBox className={style.newsletterDialog} onClose={onClose}>
        <div className={`${style.newsletter}`}>
          <div className={style.left}>
            <div className='section_title'>{content.title}</div>
            <div
              className={style.text}
              dangerouslySetInnerHTML={{ __html: content.text }}
            />
            {submitted ? (
              <LazyLoad>
                <div
                  style={{ borderWidth: '0' }}
                  className={style.text}
                  dangerouslySetInnerHTML={{ __html: content.feedback }}
                />
              </LazyLoad>
            ) : (
              <Form
                onSubmit={(data) => onSubmit(data)}
                render={({ handleSubmit }) => {
                  return (
                    <form
                      name='booking_contact'
                      className={style.form}
                      onSubmit={handleSubmit}
                    >
                      <div className={style.form_wrap}>
                        <div className={style.form_block}>
                          <Field
                            name='firstName'
                            component={Input}
                            placeholder='First Name*'
                            validate={composeValidators(required())}
                          />
                        </div>
                        <div className={style.form_block}>
                          <Field
                            name='lastName'
                            component={Input}
                            placeholder='Last Name*'
                            validate={composeValidators(required())}
                          />
                        </div>
                      </div>
                      <Field
                        name='email'
                        component={Input}
                        placeholder='Email Addrress*'
                        validate={composeValidators(required(), email())}
                      />
                      <Button
                        fetching={submitting}
                        submit
                        label={content.button_label}
                        buttonType='form_button'
                      />
                    </form>
                  )
                }}
              />
            )}
          </div>
          <div className={style.right}>
            <div className={style.item_bg}>
              <div className={style.sizer} />
              <Media
                className={style.item_img}
                src={content.image}
                size='609x396px'
              />
            </div>
          </div>
        </div>
      </DialogBox>
    </Suspense>
  )
}

export default NewsLetter
