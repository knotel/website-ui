import React from "react";
import { get } from "lodash";

import { data } from "../../helpers/mock";
import DialogBox from "../../components/DialogBox";
import ContactForm from "../ContactForm";

const EnquireModal = ({
  onClose,
  onSubmit,
  submitting,
  submitted,
  locationOptions,
  sizeOptions,
  content,
  interestOptions,
}) => {
  return (
    <DialogBox className="enquireForm" onClose={onClose} extraClass>
      <div className="enquire">
        <ContactForm
          onSubmit={onSubmit}
          submitted={submitted}
          submitting={submitting}
          locationOptions={locationOptions}
          sizeOptions={sizeOptions}
          interestOptions={interestOptions}
          contact={content}
          showText
        />
      </div>
    </DialogBox>
  );
};
export default EnquireModal;
