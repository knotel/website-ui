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

  return  <form action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DcX0000000CFh" method="POST">

 

<input type="hidden" name="oid" value="00DcX0000000CFh"/>
<input type="hidden" name="retURL" value="http://knotel.com"/>


<label for="first_name">First Name</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" /><br/>

 

<label for="last_name">Last Name</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" /><br/>

 

<label for="email">Email</label><input  id="email" maxlength="80" name="email" size="20" type="text" /><br/>

 

<label for="company">Company</label><input  id="company" maxlength="40" name="company" size="20" type="text" /><br/>

 

Head Count:<input  id="00NcX0000000EZP" name="00NcX0000000EZP" size="20" type="text" /><br/>

 

Target City:<select  id="00Nf400000U3hIp" name="00Nf400000U3hIp" title="Target City">
<option value="">--None--</option>
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
</select><br/>

 

Interested in:<select  id="00NcX0000002NDR" name="00NcX0000002NDR" title="Interested in"><option value="">--None--</option><option value="Office">Office</option>
<option value="Workclub Membership">Workclub Membership</option>
<option value="Broker Info">Broker Info</option>
<option value="Landlord Info">Landlord Info</option>
<option value="Host an Event">Host an Event</option>
<option value="Other">Other</option>
</select><br/>

 

<input type="submit" name="submit"/>

 

</form>


 
};
export default ContactForm;
