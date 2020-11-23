import React, { Component, Fragment } from "react";
import { ScrollTop } from "../component/scrollTop";
import { Tracking, TrackingReport } from "../component/Tracking";

export class TrackingPage extends Component {
  state = {};
  // componentDidMount() {
  //   console.log(this.props.location.search);
  // }
  // componentWillReceiveProps(newProps) {
  //   if (this.props.location.search !== newProps.location.search) {
  //     this.setState({ newProps: true });
  //     console.log(this.props);
  //   }
  // }
  render() {
    return (
      <Fragment>
        <Tracking {...this.props} />
        <ScrollTop />
      </Fragment>
    );
  }
}
