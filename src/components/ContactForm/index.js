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
  React.useEffect(() => {
    document.getElementById("00Nf400000A7K3F").visible = false;
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16735554300";
    script.async = true;

    document.body.appendChild(script);
  });
  const inputStyle = {
    width: "100%",
    height: "4rem",
    marginBottom: "1rem",
    border: "solid 1px",
    paddingLeft: "1rem",
  };
  const onFormSubmit = function (e) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

    gtag("config", "AW-16735554300");
    gtag("event", "conversion", {
      send_to: "AW-16735554300/APHbCMOVr-gZEPyVkaw-",
    });
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
        <div>
          <form
            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Df4000000nm4e"
              method="POST"
              onSubmit={onFormSubmit}
          >
            <input type="hidden" name="oid" value="00Df4000000nm4e" />
            <input type="hidden" name="retURL" value="http://knotel.com" />

            <input
              id="first_name"
              maxlength="40"
              name="first_name"
              size="20"
              type="text"
              placeholder="First Name"
              style={inputStyle}
              required={true}
            />
            <br />
            <input
              id="last_name"
              maxlength="80"
              name="last_name"
              size="20"
              type="text"
              placeholder="Last Name"
              style={inputStyle}
              required={true}
            />
            <br />

            <input
              id="email"
              maxlength="80"
              name="email"
              size="20"
              type="text"
              placeholder="Email"
              style={inputStyle}
              pattern="[^@\s]+@[^@\s]+\.[^@\s][^@\s]+"
              required={true}
            />
            <br />
            <input
              id="phone"
              maxlength="40"
              name="phone"
              size="20"
              type="text"
              placeholder="Phone"
              style={inputStyle}
              required={true}
            />
            <br />
            <input
              id="company"
              maxlength="40"
              name="company"
              size="20"
              type="text"
              placeholder="Company"
              style={inputStyle}
              required={true}
            />
            <br />
            <input
              id="00NVV000000milJ"
              name="00NVV000000milJ"
              size="20"
              type="text"
              placeholder="Head Count"
              style={inputStyle}
              pattern="0|[1-9]\d*" //only numbers
              required={true}
            />
            <br />
            <select
              id="00Nf400000U3hIp"
              name="00Nf400000U3hIp"
              title="Target City"
              style={inputStyle}
              required={true}
            >
              <option value="" disabled selected>
                Select Location
              </option>
              <option value="London">London</option>
              <option value="Berlin">Berlin</option>
              <option value="Frankfurt">Frankfurt</option>
              <option value="Amsterdam">Amsterdam</option>
              <option value="Dublin">Dublin</option>
              <option value="West Palm Beach">West Palm Beach</option>
              <option value="Miami">Miami</option>
              <option value="Coral Gables">Coral Gables</option>
              <option value="Austin">Austin</option>
              <option value="Rollingwood">Rollingwood</option>
              <option value="White Plains">White Plains</option>
            </select>
            <br />
            <select
              id="00NVV000000milK"
              name="00NVV000000milK"
              title="Interested in"
              style={inputStyle}
              required={true}
            >
              <option value="" disabled selected>
                Interested In
              </option>
              <option value="Office">Office</option>
              <option value="Workclub Membership">Workclub Membership</option>
              <option value="Broker Info">Broker Info</option>
              <option value="Landlord Info">Landlord Info</option>
              <option value="Host an Event">Host an Event</option>
              <option value="Other">Other</option>
            </select>
            <br />
              
            <select
              id="00Nf400000A7K3F"
              name="00Nf400000A7K3F"
              title="Source"
              value="Web"
              style={{ height: "0px" }}
              tabIndex={-1}
            >
              <option value="">--None--</option>
              <option value="Web">Web</option>
            </select>

            <textarea
              placeholder="Additional Details"
              id="00NVV000000milY"
              name="00NVV000000milY"
              rows="3"
              type="text"
              wrap="soft"
              style={{ ...inputStyle, paddingTop: "1rem" }}
            ></textarea>
            <br />

              <input type="submit" name="submit" style={inputStyle}/>
          </form>
        </div>
      )}
    </>
  );
};
export default ContactForm;
