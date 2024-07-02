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
  requiredFields = ['firstName', 'lastName', 'email', 'phone', 'companyName', 'companySize', 'location', 'locationAdditionalDetails', 'interest'],
}) => {

  // /**
  //  * Wrapper to conditionally hide a field.
  //  * 
  //  * If the field name is in the hideFields array, the field will not be rendered.
  //  * 
  //  * If an array is passed into the name prop, all fields in the array must be in the hideFields array for the field to be hidden.
  //  */
  // const div = ({ name = '', children }) => {
  //   // normalize the name prop to an arrayf
  //   const names = Array.isArray(name) ? name : [name];
  //   // Check that every name is in the hideFields array. If any are not, return the children nodes.
  //   var canDisplay = names.every((val) => hideFields.includes(val));
  //   var unableToDispaly = !canDisplay;
  //   return unableToDispaly && children;
  // }
            const locationValues = Object.values(locationOptions);

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
              <form
                action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DcX0000000CFh"
                method="POST"
                
                name="booking_contact"
                className={`${showText === true ? style.form_small : ``}${
                  style.form
                }`}
              >
                <input type="hidden" name="oid" value="00DcX0000000CFh"/>
                <input type="hidden" name="retURL" value="http://knotel.com"/>

 
                <div name={["firstName", "lastName"]}>
                  <div className={style.form_wrap}>
                    <div name="firstName">
                      <div className={style.form_block}>
                        <Field
                          name="firstName"
                          component={Input}
                          placeholder="First Name*" // TODO HERE
                          validate={
                            requiredFields.includes("firstName") &&
                            composeValidators(required())
                          }
                        />
                      </div>
                    </div>
                    <div name="lastName">
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
                    </div>
                  </div>
                </div>
                <div name="email">
                  <Field
                    name="email"
                    component={Input}
                    placeholder="Email Address*"
                    validate={
                      requiredFields.includes("email") &&
                      composeValidators(required(), email())
                    }
                  />
                </div>
                <div name="phone">
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
                </div>
                <div name={["companyName", "companySize"]}>
                  <div className={style.form_wrap}>
                    <div name="companyName">
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
                    </div>
                    <div name="companySize">
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
                    </div>
                  </div>
                </div>
                <div name="location">
                  <Field
                    name="location"
                    component={Dropdown}
                    prompt="Select Location"
                    options={{
                      FANTASTIC: "BEASTS",
                      Other: "Other",
                      Amsterdam: {
                        "Amsterdam - Keizersgracht 121": "Keizersgracht 121",
                      },
                      Austin: {
                        "Austin - 12710 Research Blvd": "12710 Research Blvd",
                        "Austin - The Overlook at Rob Roy":
                          "The Overlook at Rob Roy",
                        "Austin - 119 Nueces Street": "119 Nueces Street",
                      },
                      Berlin: {
                        "Berlin - Mehringdamm 33": "Mehringdamm 33",
                        "Berlin - Mehringdamm 32": "Mehringdamm 32",
                        "Berlin - Hussitenstrasse 32": "Hussitenstrasse 32",
                        "Berlin - Neue Grünstrasse 17": "Neue Grünstrasse 17",
                        "Berlin - Nürnberger Strasse 8": "Nürnberger Strasse 8",
                      },
                      Dublin: {
                        "Dublin - Dublin Riverview House, 21 - 23 City Quay":
                          "Dublin Riverview House, 21 - 23 City Quay",
                      },
                      London: {
                        "London - 33 Soho Square": "33 Soho Square",
                        "London - Gilray House": "Gilray House",
                        "London - Waverley House, 7-12 Noel Street":
                          "Waverley House, 7-12 Noel Street",
                        "London - 1 Finsbury Market": "1 Finsbury Market",
                        "London - Imperial House": "Imperial House",
                        "London - Chadwick Court, 15 Hatfields":
                          "Chadwick Court, 15 Hatfields",
                        "London - Old Sessions House": "Old Sessions House",
                        "London - 33 Charlotte Street": "33 Charlotte Street",
                        "London - Clerks Court": "Clerks Court",
                        "London - HYLO": "HYLO",
                        "London - One Lackington": "One Lackington",
                      },
                      Malibu: { "Malibu - Malibu Vista": "Malibu Vista" },
                      Miami: {
                        "Miami - The Press": "The Press",
                        "Miami - 1200 Ponce De Leon": "1200 Ponce De Leon",
                        "Miami - 225 NE 34th St": "225 NE 34th St",
                        "Miami - Wyncatcher": "Wyncatcher",
                      },
                      Seattle: {
                        "Seattle - Federal Reserve": "Federal Reserve",
                      },
                      Toronto: {
                        "Toronto - 121 King Street West":
                          "121 King Street West",
                      },
                      "White Plains": {
                        "White Plains - 360 Hamilton Ave": "360 Hamilton Ave",
                      },
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
                </div>
                <div name="interest">
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
                </div>
                <div name="additionalDetails">
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
                </div>
                <Field name="url" component={InputHiddenUrl} />
                <Button
                  className={style.contact_button}
                  fetching={submitting}
                  submit
                  label={contact.button_label}
                  buttonType="form_button"
                />
              </form>
      )}
    </>
  );
};
export default ContactForm;
