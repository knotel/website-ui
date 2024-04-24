import React from 'react';
import DialogBox from '../../../components/DialogBox';
import CampaignForm from '../CampaignForm';


const CampaignModal = ({
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
                <CampaignForm
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

export default CampaignModal;