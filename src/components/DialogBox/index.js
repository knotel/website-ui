import React from "react";
import ModalBase from "./ModalBase";
import style from "./style.module.css";
import NormalLink from "../NormalLink";

export default class DialogBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openClass: "",
      closeClass: "",
    };
    this.openTimer = 0;
    this.closeTimer = 0;
  }

  componentDidMount() {
    this.openTimer = setTimeout(() => {
      this.setState({
        openClass: " " + style.dialogOpen,
      });
    }, 50);
  }

  componentWillUnmount() {
    clearTimeout(this.openTimer);
    clearTimeout(this.closeTimer);
  }

  onCloseHandler = (callPropsFunc) => {
    const { onClose = () => {} } = this.props;
    if (callPropsFunc === undefined) {
      callPropsFunc = true;
    }
    this.closeTimer = this.setState(
      {
        closeClass: " " + style.dialogRemove,
      },
      () => {
        if (callPropsFunc) {
          this.openTimer = setTimeout(() => {
            onClose();
          }, 650);
        }
      }
    );
  };

  render() {
    const {
      className = "",
      classes = false,
      content = false,
      buttons = false,
      showClose = true,
      children,
      close_icon,
      extraClass = false,
      burgerMenu = false,
      close = false,
    } = this.props;

    const { openClass, closeClass } = this.state;
    return (
      <ModalBase className={`${style.modal}${classes ? ` ${classes}` : ""}`}>
        <div
          className={`${style.dialogBoxOverlayWrap}${openClass}${closeClass}`}
        >
          <div className={`${style.dialogBoxOverlay}`}>
            <div
              className={
                burgerMenu === true
                  ? style.header_dialog
                  : `${style.dialogContent} ${className}`
              }
            >
              {showClose === true && (
                <NormalLink
                  className={
                    extraClass === true ? style.extraClass : style.dialogClose
                  }
                  onClick={this.onCloseHandler}
                >
                  <span className={style.closeIcon}>
                    <i className="fas fa-chevron-left"></i>
                  </span>
                  <span className={style.closeText}>Done</span>
                  {close === true && (
                    <span className={style.x_icon}>
                      <img src={close_icon} alt={`done`} />
                    </span>
                  )}
                </NormalLink>
              )}
              {content && content(this.onCloseHandler)}
              {children}
              {buttons && (
                <div className={style.dialogButtons}>
                  {buttons(this.onCloseHandler)}
                </div>
              )}
            </div>
          </div>
        </div>
      </ModalBase>
    );
  }
}
