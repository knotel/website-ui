import React from 'react';
import { get } from 'lodash';

import { data } from '../../../helpers/mock';
import DialogBox from '../../../components/DialogBox';
import GiftCardForm from '../GiftCardForm';


const GiftCardModal = ({ onClose }) => {
    return (
        <DialogBox className={`giftForm`} onClose={onClose} extraClass={true}>
            <div className={`gift`}>
                <GiftCardForm content={get(data, 'gift_form')} showText={true} />
            </div>
        </DialogBox>
    )
}

export default GiftCardModal;