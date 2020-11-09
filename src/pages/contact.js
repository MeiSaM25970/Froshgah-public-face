import React, { Component, Fragment } from "react";
import { ContactArea } from "../component/contact/contactArea";
import { ContactPageTitle } from "../component/contact/contactPageTitle";
import { ScrollTop } from "../component/scrollTop";

export class ContactPage extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <ContactPageTitle />
        <ContactArea />
        <ScrollTop />
      </Fragment>
    );
  }
}