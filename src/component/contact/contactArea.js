import React, { Component } from "react";
import { ContactTellAndFollow } from "./contactFollow";
import { ContactForm } from "./contactForm";

export class ContactArea extends Component {
  state = {};
  render() {
    return (
      <section className="main-contact-area mt-100 mb-5">
        <div className="container">
          <div className="row">
            <ContactForm />
            <ContactTellAndFollow data={this.props.data} />
          </div>
        </div>
      </section>
    );
  }
}
