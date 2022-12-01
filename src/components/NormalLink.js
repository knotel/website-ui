import React from 'react'

const NormalLink = ({
  children = '',
  link = '',
  className = '',
  onClick = () => {},
  disabled = false,
  download = false,
  target = '_self'
}) => {
  const mailtoCondt = link.indexOf('mailto:') !== -1
  const telCondt = link.indexOf('tel:') !== -1
  const httpCondt = link.indexOf('http') !== -1

  if (disabled) {
    return <div className={`${className} disabledLink`}>{children}</div>
  }

  if (download === true) {
    return (
      <a className={`${className}`} href={link} onClick={onClick} download>
        {children}
      </a>
    )
  }

  if (httpCondt) {
    return (
      <a
        className={`${className}`}
        href={link}
        target='_blank'
        rel='noreferrer'
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  if (mailtoCondt || telCondt) {
    return (
      <a className={`${className}`} href={link} onClick={onClick}>
        {children}
      </a>
    )
  }

  if (link) {
    return (
      <a
        className={`${className}`}
        href={link}
        target={target}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <a className={`${className}`} onClick={onClick} href=''>
      {children}
    </a>
  )
}

export default NormalLink
