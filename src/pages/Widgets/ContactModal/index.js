import React from 'react';
import DialogBox from '../../../components/DialogBox';
import ContactForm from '../../../components/ContactForm';


const ContactModal = ({
    onClose,
    onSubmit,
    submitting,
    submitted,
    locationOptions,
    sizeOptions,
    content,
    close_icon,
    interestOptions,
    hideFields = ['companyName', 'companySize', 'interest'],
    requiredFields = ['firstName', 'lastName', 'email', 'location'],
}) => {
    return (
        <DialogBox className={`giftForm`} onClose={onClose} extraClass={true} close_icon={close_icon}>
            <div className={`gift`}>
                <ContactForm
                    onSubmit={onSubmit}
                    submitted={submitted}
                    submitting={submitting}
                    locationOptions={locationOptions}
                    sizeOptions={sizeOptions}
                    interestOptions={interestOptions}
                    contact={content}
                    hideFields={hideFields}
                    requiredFields={requiredFields}
                    showText
                />
            </div>
        </DialogBox>
    )
}

export default ContactModal;