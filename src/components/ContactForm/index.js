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
  hideFields = [],
  requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "companyName",
    "companySize",
    "location",
    "locationAdditionalDetails",
    "interest",
  ],
}) => {
  /**
   * Wrapper to conditionally hide a field.
   *
   * If the field name is in the hideFields array, the field will not be rendered.
   *
   * If an array is passed into the name prop, all fields in the array must be in the hideFields array for the field to be hidden.
   */
  const ShowField = ({ name = "", children }) => {
    // normalize the name prop to an array
    const names = Array.isArray(name) ? name : [name];
    // Check that every name is in the hideFields array. If any are not, return the children nodes.
    return !names.every((val) => hideFields.includes(val)) && children;
  };

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
                className={`${showText === true ? style.form_small : ``}${
                  style.form
                }`}
                onSubmit={handleSubmit}
              >
                <ShowField name={["firstName", "lastName"]}>
                  <div className={style.form_wrap}>
                    <ShowField name="firstName">
                      <div className={style.form_block}>
                        <Field
                          name="firstName"
                          component={Input}
                          placeholder="First Name*"
                          validate={
                            requiredFields.includes("firstName") &&
                            composeValidators(required())
                          }
                        />
                      </div>
                    </ShowField>
                    <ShowField name="lastName">
                      <div className={style.form_block}>
                        <Field
                          name="lastName"
                          component={Input}
                          placeholder="Last Name*"
                          validate={
                            requiredFields.includes("lastName") &&
                            composeValidators(required())
                          }
                        />
                      </div>
                    </ShowField>
                  </div>
                </ShowField>
                <ShowField name="email">
                  <Field
                    name="email"
                    component={Input}
                    placeholder="Email Address*"
                    validate={
                      requiredFields.includes("email") &&
                      composeValidators(required(), email())
                    }
                  />
                </ShowField>
                <ShowField name="phone">
                  <Field
                    name="phone"
                    component={Input}
                    type="tel"
                    placeholder="Phone Number"
                    validate={
                      requiredFields.includes("phone") &&
                      composeValidators(required())
                    }
                  />
                </ShowField>
                <ShowField name={["companyName", "companySize"]}>
                  <div className={style.form_wrap}>
                    <ShowField name="companyName">
                      <div className={style.form_block}>
                        <Field
                          name="companyName"
                          component={Input}
                          placeholder="Company Name"
                          validate={
                            requiredFields.includes("companyName") &&
                            composeValidators(required())
                          }
                        />
                      </div>
                    </ShowField>
                    <ShowField name="companySize">
                      <div className={style.form_block}>
                        <Field
                          name="companySize"
                          component={Dropdown}
                          prompt="Company Size"
                          options={{
                            "1-10": "1-10",
                            "11-50": "11-50",
                            "50+": "50+",
                          }}
                          validate={
                            requiredFields.includes("companySize") &&
                            composeValidators(required())
                          }
                        />
                      </div>
                    </ShowField>
                  </div>
                </ShowField>
                <ShowField name="location">
                  <Field
                    name="location"
                    component={Dropdown}
                    prompt="Select Location"
                    options={{
                      "": "None",
                      London: "London",
                      Berlin: "Berlin",
                      Frankfurt: "Frankfurt",
                      Amsterdam: "Amsterdam",
                      Dublin: "Dublin",
                      "West Palm Beach": "West Palm Beach",
                      Miami: "Miami",
                      "Coral Gables": "Coral Gables",
                      Austin: "Austin",
                      Rollingwood: "Rollingwood",
                      "White Plains": "White Plains",
                    }}
                    validate={
                      requiredFields.includes("location") &&
                      composeValidators(required())
                    }
                  />
                  {values.location ===
                  locationValues[locationValues.length - 1] ? (
                    <Field
                      name="locationAdditionalDetails"
                      component={Input}
                      placeholder="Location Details"
                      validate={
                        requiredFields.includes("locationAdditionalDetails") &&
                        composeValidators(required())
                      }
                    />
                  ) : (
                    <></>
                  )}
                </ShowField>
                <ShowField name="interest">
                  <Field
                    name="interest"
                    component={Dropdown}
                    prompt="Interested in ..."
                    options={interestOptions}
                    validate={
                      requiredFields.includes("interest") &&
                      composeValidators(required())
                    }
                  />
                </ShowField>
                <ShowField name="additionalDetails">
                  <Field
                    name="additionalDetails"
                    type="textarea"
                    rows={2}
                    component={Input}
                    placeholder="Additional details"
                    validate={
                      requiredFields.includes("additionalDetails") &&
                      composeValidators(required())
                    }
                  />
                </ShowField>
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
