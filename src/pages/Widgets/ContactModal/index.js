import React from 'react';
import DialogBox from '../../../components/DialogBox';
import ContactForm from '../ContactForm';


const ContactModal = ({
    onClose,
    onSubmit,
    submitting,
    submitted,
    content,
    campaigns,
    campaign
}) => {
    const campaignContent = campaigns?.[campaign] || {};
    Object.assign(content, campaignContent);
    return (
        <DialogBox className={`giftForm`} onClose={onClose} extraClass={true}>
            <div className={`gift`}>
                <ContactForm
                    showText={true}
                    onSubmit={onSubmit}
                    submitted={submitted}
                    submitting={submitting}
                    content={content}
                    campaign={campaign}
                />
            </div>
        </DialogBox>
    )
}

export default ContactModal;