import React, { Suspense } from 'react';
import { Field, Form } from "react-final-form";

import { Button, Input } from '../Field';
import Media from '../Media';
import DialogBox from '../DialogBox';

import style from './style.module.css';
import { composeValidators } from '../../helpers/input';
import { email, required } from 'redux-form-validators';

const NewsLetter = ({ onClose, content }) => {
    return (
        <Suspense fallback={<></>}>
            <DialogBox className={style.newsletterDialog} onClose={onClose}>
                <div className={`${style.newsletter}`}>
                    <div className={style.left}>
                        <div className={`section_title`}>{content.title}</div>
                        <div className={style.text} dangerouslySetInnerHTML={{ __html: content.text }}></div>
                        <Form
                            onSubmit={(data) => console.log(data)}
                            render={({ handleSubmit }) => {
                                return (
                                    <form name="booking_contact" className={style.form} onSubmit={handleSubmit}>
                                        <div className={style.form_wrap}>
                                            <div className={style.form_block}>
                                                <Field name="f_name" component={Input} placeholder="First Name*" validate={composeValidators(required())}/>
                                            </div>
                                            <div className={style.form_block}>
                                                <Field name="l_name" component={Input} placeholder="Last Name*" validate={composeValidators(required())}/>
                                            </div>
                                        </div>
                                        <Field name="email" component={Input} placeholder="Email Addrress*" validate={composeValidators(required(), email())}/>
                                        <Button
                                            submit={true}
                                            buttonType="form_button"
                                            label={content.button_label}
                                        />
                                    </form>
                                )
                            }}
                        />
                    </div>
                    
                    <div className={style.right}>
                        <div className={style.item_bg}>
                            <div className={style.sizer} />
                            <Media className={style.item_img} src={content.image} size="609x396px" />
                        </div>
                    </div>
                </div>
            </DialogBox>
        </Suspense>
    )
}

export default NewsLetter;