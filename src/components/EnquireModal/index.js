import React, { Suspense } from 'react'
import { get } from 'lodash'

import { data } from '../../helpers/mock'
import DialogBox from '../../components/DialogBox'
import ContactForm from '../ContactForm'

const EnquireModal = ({ onClose }) => {
  return (
    <Suspense fallback={<></>}>
      <DialogBox className='enquireForm' onClose={onClose} extraClass>
        <div className='enquire'>
          <ContactForm contact={get(data, 'contact', {})} showText />
        </div>
      </DialogBox>
    </Suspense>
  )
}
export default EnquireModal
