import React, { Component, Fragment } from "react";
import { ScrollTop } from "../component/scrollTop";
import { SuccessPayment } from "../component/successPayment";

export class SuccessPaymentPage extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <SuccessPayment {...this.props} />
        <ScrollTop />
      </Fragment>
    );
  }
}
