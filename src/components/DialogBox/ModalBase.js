import React from "react";
import ReactDOM from "react-dom";
import style from "./style.module.css";

export default class ModalBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { el: null };
  }
  componentDidMount() {
    const el = document.createElement("div");
    el.className = this.props.className || style.modal;
    el.role = "dialog";
    el.setAttribute('aria-modal', "true");
    document.body.appendChild(el);
    this.setState({ el });
  }
  componentWillUnmount() {
    if (this.state.el) {
      document.body.removeChild(this.state.el);
    }
  }
  render() {
    return this.state.el
      ? ReactDOM.createPortal(this.props.children, this.state.el)
      : null;
  }
}
