import React from "react";
import { Field, Form } from "react-final-form";
import { EqualHeight, EqualHeightElement } from "react-equal-height/clean";
import { email, required } from "redux-form-validators";

import { Button, Input } from "../Field";
import Media from "../Media";
import DialogBox from "../DialogBox";
import { composeValidators } from "../../helpers/input";
import LazyLoad from "../Lazyload";

import style from "./style.module.css";

const NewsLetter = ({ onClose, content, onSubmit, submitting, submitted }) => {
  return (
    <DialogBox className={style.newsletterDialog} onClose={onClose}>
      <EqualHeight>
        <div className={`${style.newsletter}`}>
          <LazyLoad
            lazyLoadClass={`section_wrap col_50_50`}
            animatedClass="animated"
            rootMargin="-20%"
          >
            <div className={`section_border_top`}></div>
            <div className={`section_border_left`}></div>
            <div className={`section_border_right`}></div>
            <div className={`section_border_bottom`}></div>
            <div className={style.left}>
              <EqualHeightElement name="NewsLetter">
                <div className={style.content}>
                  <div className={`section_title`}>{content.title}</div>
                  <div
                    className={style.text}
                    dangerouslySetInnerHTML={{ __html: content.text }}
                  />
                  {submitted ? (
                    <LazyLoad>
                      <div
                        style={{ borderWidth: "0" }}
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
                            name="booking_contact"
                            className={style.form}
                            onSubmit={handleSubmit}
                          >
                            <div className={style.form_wrap}>
                              <div className={style.form_block}>
                                <Field
                                  name="firstName"
                                  component={Input}
                                  placeholder="First Name*"
                                  validate={composeValidators(required())}
                                />
                              </div>
                              <div className={style.form_block}>
                                <Field
                                  name="lastName"
                                  component={Input}
                                  placeholder="Last Name*"
                                  validate={composeValidators(required())}
                                />
                              </div>
                            </div>
                            <Field
                              name="email"
                              component={Input}
                              placeholder="Email Addrress*"
                              validate={composeValidators(required(), email())}
                            />
                            <Button
                              fetching={submitting}
                              submit
                              label={content.button_label}
                              buttonType="form_button"
                            />
                          </form>
                        );
                      }}
                    />
                  )}
                </div>
              </EqualHeightElement>
            </div>
            <div className={`section_border_middle`}></div>
            <div className={style.right}>
              <EqualHeightElement name="NewsLetter">
                <div className={style.content}>
                  <div className={style.item_bg}>
                    <div className={style.sizer} />
                    <Media
                      className={style.item_img}
                      src={content.image}
                      size="609x396px"
                    />
                  </div>
                </div>
              </EqualHeightElement>
            </div>
          </LazyLoad>
        </div>
      </EqualHeight>
    </DialogBox>
  );
};

export default NewsLetter;
