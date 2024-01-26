import React from "react";
import { Field, Form } from "react-final-form";
import { required, email } from "redux-form-validators";

import { composeValidators } from "../../../helpers/input";
import { Input, Button } from "../../../components/Field";

import style from './style.module.css'

const GiftCardForm = ({ content, showText = false }) => {
    return (
        <>
            <div className={style.form_title}>{content.form_title}</div>
            {showText && <div className={style.text} dangerouslySetInnerHTML={{ __html: content.form_text }}></div>}
            <Form
                onSubmit={(data) => { }}
                render={({ handleSubmit }) => {
                    return (
                        <form name="gift_card_form" className={`${showText === true ? style.form_small : ``}${style.form}`} onSubmit={handleSubmit}>
                            <div className={style.form_wrap}>
                                <div className={style.form_block}>
                                    <Field name="f_name" component={Input} placeholder="First Name*" validate={composeValidators(required())} />
                                </div>
                                <div className={style.form_block}>
                                    <Field name="l_name" component={Input} placeholder="Last Name*" validate={composeValidators(required())} />
                                </div>
                            </div>
                            <Field name="email" component={Input} placeholder="Email Address*" validate={composeValidators(required(), email())} />
                            <Field name="phone" component={Input} placeholder="Phone Number" />
                            <Field name="name" component={Input} placeholder="Company Name" />
                            <Button
                                submit={true}
                                label={content.button_label}
                                buttonType="form_button"
                            />
                        </form>
                    )
                }}
            />
        </>
    )
}

export default GiftCardForm;