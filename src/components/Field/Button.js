import { get } from 'lodash'
import React from 'react'

import NormalLink from '../NormalLink'
import Spinner from '../Spinner'
import style from './style.module.css'

const Button = (props) => {
  let {
    loading = false,
    color = '#02269E',
    className = '',
    submit = false,
    label = '',
    svgIcon = false,
    target = '_self',
    fetching = false,
    link = '',
    disabled = false,
    onClick = null,
    rectBtn = false,
    filterSearchIcon = false,
    buttonType = false
  } = props

  const btnTypes = {
    header_blue_btn: style.header_blue_btn,
    block_btn: style.block_btn,
    banner_btn: style.banner_btn,
    form_button: style.form_button,
    white_btn: style.white_btn,
    transparent_btn: style.transparent
  }
  className = get(btnTypes, buttonType) + ' ' + className

  if (filterSearchIcon) {
    return (
      <button
        type='submit'
        className={`${style.icon} ${style.search} ${style.inputIcon}`}
      />
    )
  }
  if (svgIcon) {
    return (
      <a
        className={`${style.button}${className ? ' ' + className : ''}`}
        onClick={onClick}
        href={false}
      >
        <span className={style.download_icon}>
          <img src={svgIcon} alt='icon' />
        </span>
        <span
          dangerouslySetInnerHTML={{
            __html: label
          }}
        />
      </a>
    )
  }

  if (fetching === true) {
    return (
      <div className={`${style.button}${className ? ' ' + className : ''}`}>
        <div className={style.fetching}>
          <Spinner color={color} />
        </div>
        <span
          dangerouslySetInnerHTML={{
            __html: label
          }}
        />
      </div>
    )
  }

  if (disabled === true || loading === true) {
    return (
      <div
        className={`${style.button}${className ? ' ' + className : ''} ${
          style.buttonDisabled
        }`}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: label
          }}
        />
        {rectBtn !== false && <span className={rectBtn} />}
      </div>
    )
  }

  if (submit === true) {
    return (
      <button
        type='submit'
        className={`${style.button}${className ? ' ' + className : ''}`}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: label
          }}
        />
        {rectBtn !== false && <span className={rectBtn} />}
      </button>
    )
  }

  if (onClick) {
    return (
      <a
        className={`${style.button}${className ? ' ' + className : ''}`}
        onClick={onClick}
        href={false}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: label
          }}
        />
        {rectBtn !== false && <span className={rectBtn} />}
      </a>
    )
  }

  if (!link && !onClick) {
    return (
      <div className={`${style.button}${className ? ' ' + className : ''}`}>
        <span
          dangerouslySetInnerHTML={{
            __html: label
          }}
        />
        {rectBtn !== false && <span className={rectBtn} />}
      </div>
    )
  }

  return (
    <>
      <NormalLink
        link={link}
        className={`${style.button}${className ? ' ' + className : ''}`}
        onClick={onClick}
        target={target}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: label
          }}
        />
        {rectBtn !== false && <span className={rectBtn} />}
      </NormalLink>
    </>
  )
}
export default Button
