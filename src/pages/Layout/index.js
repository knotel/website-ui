import React, { useState, useEffect, useContext } from 'react'
import $ from 'jquery-slim'

import EnquireModal from '../../components/EnquireModal'
import style from './style.module.css'
import Header from './Header'
import Footer from './Footer'
import { AppContext } from '../../Contexts/AppContext'

const Layout = ({ children, headerProps, footerProps }) => {
  const [openForm, setOpenForm] = useState(false)
  const { setContext } = useContext(AppContext)
  const [dimesions, setDimensions] = useState({
    height: 0,
    winWidth: window.innerWidth,
    winHeight: window.innerHeight
  })
  useEffect(() => {
    function updateDimensions() {
      const _dimensions = {
        height: $(`.${style.header}`).outerHeight(),
        winWidth: window.innerWidth,
        winHeight: $(window).height()
      }
      setDimensions(_dimensions)
      setContext(_dimensions)
    }
    window.addEventListener('resize', updateDimensions)
    updateDimensions()
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])
  return (
    <>
      <Header
        logo={headerProps.logo}
        links={headerProps.links}
        setOpenForm={(e) => {
          setOpenForm(e)
        }}
        width={dimesions.winWidth}
        offset={dimesions.height}
      />
      <div className='viewport'>
        <div className='content' style={{ paddingTop: dimesions.height }}>
          {children}
        </div>
      </div>
      <Footer
        footerProps={footerProps}
        setOpenForm={(e) => {
          setOpenForm(e)
        }}
        width={dimesions.winWidth}
      />
      {openForm === 'enquire-form' && (
        <EnquireModal
          {...headerProps.contactForm}
          onClose={() => setOpenForm(false)}
        />
      )}
    </>
  )
}

export default Layout
