import React from 'react';
import { get } from 'lodash';

import { data } from '../../../helpers/mock';
import DialogBox from '../../../components/DialogBox';
import GiftCardForm from '../GiftCardForm';


const GiftCardModal = ({
    onClose,
    onSubmit,
    submitting,
    submitted,
    content
}) => {
    return (
        <DialogBox className={`giftForm`} onClose={onClose} extraClass={true}>
            <div className={`gift`}>
                <GiftCardForm
                    showText={true}
                    onSubmit={onSubmit}
                    submitted={submitted}
                    submitting={submitting}
                    content={content}
                />
            </div>
        </DialogBox>
    )
}

export default GiftCardModal;