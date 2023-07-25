import React from "react";
import { Field, Form } from "react-final-form";
import { required, email } from "redux-form-validators";

import { composeValidators } from "../../helpers/input";

import { Button, Dropdown, Input, InputHiddenUrl } from "../Field";
import LazyLoad from "../Lazyload";
import style from "./style.module.css";

const ContactForm = ({
  contact,
  showText = false,
  onSubmit,
  submitting,
  submitted,
  locationOptions,
  sizeOptions,
  interestOptions,
}) => {
  return (
    <>
      <div className={style.form_title}>{contact.form_title}</div>
      {showText && (
        <div
          className={style.text}
          dangerouslySetInnerHTML={{ __html: contact.form_text }}
        />
      )}
      {submitted ? (
        <LazyLoad>
          <div
            style={{ borderWidth: "0" }}
            className={style.text}
            dangerouslySetInnerHTML={{ __html: contact.feedback }}
          />
        </LazyLoad>
      ) : (
        <Form
          onSubmit={(data) => onSubmit(data)}
          render={({ handleSubmit, values }) => {
            const locationValues = Object.values(locationOptions);
            return (
              <form
                name="booking_contact"
                className={`${showText === true ? style.form_small : ``}${style.form
                  }`}
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
                  placeholder="Email Address*"
                  validate={composeValidators(required(), email())}
                />
                <Field
                  name="phone"
                  component={Input}
                  placeholder="Phone Number"
                  validate={composeValidators(required())}
                />
                <div className={style.form_wrap}>
                  <div className={style.form_block}>
                    <Field
                      name="companyName"
                      component={Input}
                      placeholder="Company Name"
                      validate={composeValidators(required())}
                    />
                  </div>
                  <div className={style.form_block}>
                    <Field
                      name="companySize"
                      component={Dropdown}
                      prompt="Company Size"
                      options={{ '1-10': '1-10', '11-50': '11-50', '50+': '50+' }}
                      validate={composeValidators(required())}
                    />
                  </div>
                </div>
                <Field
                  name="location"
                  component={Dropdown}
                  prompt="Select Location"
                  options={{
                    "Other": "Other",
                    "Amsterdam": { "Amsterdam - Keizersgracht 121": "Keizersgracht 121" },
                    "Austin": { "Austin - 12710 Research Blvd": "12710 Research Blvd", "Austin - The Overlook at Rob Roy": "The Overlook at Rob Roy", "Austin - 119 Nueces Street": "119 Nueces Street" },
                    "Berlin": { "Berlin - Mehringdamm 33": "Mehringdamm 33", "Berlin - Mehringdamm 32": "Mehringdamm 32", "Berlin - Hussitenstrasse 32": "Hussitenstrasse 32", "Berlin - Neue Grünstrasse 17": "Neue Grünstrasse 17", "Berlin - Nürnberger Strasse 8": "Nürnberger Strasse 8" },
                    "Dublin": { "Dublin - Dublin Riverview House, 21 - 23 City Quay": "Dublin Riverview House, 21 - 23 City Quay" },
                    "London": { "London - 33 Soho Square": "33 Soho Square", "London - Gilray House": "Gilray House", "London - Waverley House, 7-12 Noel Street": "Waverley House, 7-12 Noel Street", "London - 1 Finsbury Market": "1 Finsbury Market", "London - Imperial House": "Imperial House", "London - Chadwick Court, 15 Hatfields": "Chadwick Court, 15 Hatfields", "London - Old Sessions House": "Old Sessions House", "London - 33 Charlotte Street": "33 Charlotte Street", "London - Clerks Court": "Clerks Court", "London - HYLO": "HYLO", "London - One Lackington": "One Lackington" },
                    "Malibu": { "Malibu - Malibu Vista": "Malibu Vista" },
                    "Miami": { "Miami - The Press": "The Press", "Miami - 1200 Ponce De Leon": "1200 Ponce De Leon", "Miami - 225 NE 34th St": "225 NE 34th St", "Miami - Wyncatcher": "Wyncatcher" },
                    "Seattle": { "Seattle - Federal Reserve": "Federal Reserve" },
                    "Toronto": { "Toronto - 121 King Street West": "121 King Street West" },
                    "White Plains": { "White Plains - 360 Hamilton Ave": "360 Hamilton Ave" }
                  }}
                  validate={composeValidators(required())}
                />
                {values.location ===
                  locationValues[locationValues.length - 1] ? (
                  <Field
                    name="locationAdditionalDetails"
                    component={Input}
                    placeholder="Location Details"
                    validate={composeValidators(required())}
                  />
                ) : (
                  <></>
                )}
                <Field
                  name="interest"
                  component={Dropdown}
                  prompt="Interested in ..."
                  options={interestOptions}
                  validate={composeValidators(required())}
                />
                <Field
                  name="additionalDetails"
                  type="textarea"
                  rows={2}
                  component={Input}
                  placeholder="Additional details"
                />
                <Field name="url" component={InputHiddenUrl} />
                <Button
                  className={style.contact_button}
                  fetching={submitting}
                  submit
                  label={contact.button_label}
                  buttonType="form_button"
                />
              </form>
            );
          }}
        />
      )}
    </>
  );
};
export default ContactForm;
