import React, { lazy, Suspense } from 'react'
import Button from '../../components/Field/Button.js'
import style from './style.module.css'
const NormalLink = lazy(() => import('../../components/NormalLink'))

const Header = ({ setOpenForm, logo }) => {
  return (
    <div className={style.header}>
      <div className='c'>
        <div className={style.header_wrap}>
          <div className={style.header_logo}>
            <Suspense fallback={<></>}>
              <NormalLink link='/'>
                <img src={logo} alt='Knotel' />
              </NormalLink>
            </Suspense>
          </div>
          <div className={style.header_menu_wrap}>
            <NormalLink className={style.header_menu}>Office</NormalLink>
            <NormalLink className={style.header_menu}>Workclub</NormalLink>
            <div className={style.header_btn}>
              <Button
                buttonType='header_blue_btn'
                onClick={() => {
                  setOpenForm('enquire-form')
                }}
                label='Enquire'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
