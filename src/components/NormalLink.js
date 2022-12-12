import React from "react";
import Link from "next/link";

const NormalLink = ({
  children = "",
  link = "",
  className = "",
  onClick = () => {},
  disabled = false,
  download = false,
  target = "_self",
}) => {
  let mailtoCondt = link.indexOf("mailto:") !== -1;
  let telCondt = link.indexOf("tel:") !== -1;
  let httpCondt = link.indexOf("http") !== -1;

  if (disabled) {
    return (
      <div className={`${className} ${style.disabledLink}`}>{children}</div>
    );
  }

  if (download === true) {
    return (
      <Link href={link}>
        <a className={`${className}`} onClick={onClick} download>
          {children}
        </a>
      </Link>
    );
  }

  if (httpCondt) {
    return (
      <Link href={link}>
        <a
          className={`${className}`}
          target="_blank"
          rel="noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      </Link>
    );
  }

  if (mailtoCondt || telCondt) {
    return (
      <Link href={link}>
        <a className={`${className}`} onClick={onClick}>
          {children}
        </a>
      </Link>
    );
  }

  if (link) {
    return (
      <Link href={link}>
        <a
          className={`${className}`}
          href={link}
          target={target}
          onClick={onClick}
        >
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a className={`${className}`} onClick={onClick}>
      {children}
    </a>
  );
};

export default NormalLink;
