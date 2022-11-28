import React from 'react';
import { Field, Form } from "react-final-form";
import { required, email } from 'redux-form-validators';
 
import { composeValidators } from '../../helpers/input';

import { Button, Dropdown, Input } from "../Field";
import style from './style.module.css';

const ContactForm = ({ contact, showText = false }) => {

    return (
        <>
            <div className={style.form_title}>{contact.form_title}</div>
            {showText && <div className={style.text} dangerouslySetInnerHTML={{ __html: contact.form_text }}></div>}
            <Form
                onSubmit={(data) => console.log(data)}
                render={({ handleSubmit }) => {
                    return (
                        <form name="booking_contact" className={style.form} onSubmit={handleSubmit}>
                            <div className={style.form_wrap}>
                                <div className={style.form_block}>
                                    <Field name="f_name" component={Input} placeholder="First Name*" validate={composeValidators(required())} />
                                </div>
                                <div className={style.form_block}>
                                    <Field name="l_name" component={Input} placeholder="Last Name*" validate={composeValidators(required())} />
                                </div>
                            </div>
                            <Field name="email" component={Input} placeholder="Email Addrress*" validate={composeValidators(required(), email())} />
                            <Field name="phone" component={Input} placeholder="Phone Number" />
                            <div className={style.form_wrap}>
                                <div className={style.form_block}>
                                    <Field name="name" component={Input} placeholder="Company Name" />
                                </div>
                                <div className={style.form_block}>
                                    <Field name="size" component={Dropdown} prompt="Company Size" options={['1-5', '5-10']} />
                                </div>
                            </div>
                            <Field name="interest" component={Dropdown} prompt="Interested in ..." />
                            <Field name="message" type="textarea" rows={2} component={Input} placeholder="Additional details" />
                                <Button
                                    submit={true}
                                    label={contact.button_label}
                                    buttonType="form_button"
                                />         
                        </form>
                    )
                }}
            />
        </>
    )
}
export default ContactForm;