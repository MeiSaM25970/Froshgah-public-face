import React, { Component, Fragment } from "react";
import { ContactArea } from "../component/contact/contactArea";
import { ContactPageTitle } from "../component/contact/contactPageTitle";
import { ScrollTop } from "../component/scrollTop";

export class ContactPage extends Component {
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
    const footerDetail = this.props.footerDetail;
    return (
      <Fragment>
        <ContactPageTitle />
        <ContactArea data={footerDetail} />
        <ScrollTop />
      </Fragment>
    );
  }
}
