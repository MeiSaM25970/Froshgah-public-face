import React, { Component, Fragment } from "react";
import { ScrollTop } from "../component/scrollTop";
import { FailPayment } from "../component/failPayment";

export class FailPaymentPage extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <FailPayment {...this.props} />
        <ScrollTop />
      </Fragment>
    );
  }
}
