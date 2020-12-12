import React, { Component, Fragment } from "react";
import { ScrollTop } from "../component/scrollTop";
import { SuccessPayment } from "../component/successPayment";

export class SuccessPaymentPage extends Component {
  state = {};
  componentDidMount() {
    this.scrollTop();
  }
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    return (
      <Fragment>
        <SuccessPayment {...this.props} />
        <ScrollTop />
      </Fragment>
    );
  }
}
