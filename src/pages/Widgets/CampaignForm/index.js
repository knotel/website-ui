import React from "react";
import { Field, Form } from "react-final-form";
import { required, email } from "redux-form-validators";

import { composeValidators } from "../../../helpers/input";
import { Input, Button } from "../../../components/Field";
import LazyLoad from "../../../components/Lazyload";

import style from './style.module.css'

const CampaignForm = (props) => {
    const {
        content,
        showText = false,
        onSubmit,
        submitting,
        submitted,
        campaign = ''
    } = props;

    return (
        <>
            {submitted ? (
                <LazyLoad>
                    {/* <div
                        style={{ borderWidth: "0" }}
                        className={style.text}
                        dangerouslySetInnerHTML={{ __html: content.feedback }}
                    /> */}
                    <div className={style.form_title}>Thank you for your response</div>
                    <div className={style.text}>We will be in touch soon.</div>
                </LazyLoad>
            ) : (
                <>
                    <div className={style.form_title}>{content.form_title}</div>
                    {showText && <div className={style.text} dangerouslySetInnerHTML={{ __html: content.form_text }}></div>}
                    <Form
                        onSubmit={(data) => onSubmit(data)}
                        render={({ handleSubmit, values }) => {
                            return (
                                <form name="campaign_form" className={`${showText === true ? style.form_small : ``}${style.form}`} onSubmit={handleSubmit}>
                                    <Field name="email" component={Input} placeholder="Email Address*" validate={composeValidators(required(), email())} />
                                    <Field name="message" 
                                     component={Input} placeholder="Message" inputType="textarea" />
                                    {campaign && (
                                        <Field name="campaign" type="hidden" initialValue={campaign} component="input" />
                                    )}
                                    <Button
                                        submit={true}
                                        fetching={submitting}
                                        label={content.button_label}
                                        buttonType="form_button"
                                    />
                                </form>
                            )
                        }}
                    />
                </>
            )}
        </>
    )
}

export default CampaignForm;