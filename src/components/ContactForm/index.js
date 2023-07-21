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
                  prompt="Select City"
                  options={{
                    "Amsterdam": { "Amsterdam - De Pijp": "De Pijp", "Amsterdam - Canal Area": "Canal Area", "Amsterdam - Central": "Central" },
                    "Austin": { "Austin - NW Austin": "NW Austin", "Austin - Westlake": "Westlake", "Austin - Downtown": "Downtown" },
                    "Berlin": { "Berlin - Kreuzberg": "Kreuzberg", "Berlin - Mitte": "Mitte", "Berlin - Kurfürstendamm": "Kurfürstendamm" },
                    "Dublin": { "Dublin - Dublin 2": "Dublin 2", "Dublin - D2": "D2" },
                    "London": { "London - Soho": "Soho", "London - Clerkenwell": "Clerkenwell", "London - Southwark": "Southwark", "London - City Fringe": "City Fringe", "London - Farringdon": "Farringdon", "London - Covent Garden": "Covent Garden", "London - Fitzrovia": "Fitzrovia", "London - City Core": "City Core", "London - Monument": "Monument" },
                    "Miami": { "Miami - Wynwood": "Wynwood", "Miami - West Palm Beach": "West Palm Beach", "Miami - Little Gables": "Little Gables", "Miami - Midtown": "Midtown" },
                    "Paris (Deskeo)": "Paris (Deskeo)",
                    "Toronto": { "Toronto - Financial District": "Financial District" },
                    "White Plains": "White Plains",
                    "Other (please add location detail below)": "Other (please add location detail below)"
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
