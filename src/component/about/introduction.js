import React, { Component } from "react";
import { API_ADDRESS_SERVICE } from "../../env";
import PleaseWait from "../loading/pleaseWait";
export class IntroductionAbout extends Component {
  state = {};
  render() {
    return this.props.data ? (
      <section className="about-intro mt-30">
        <div className="row d-lg-flex align-items-lg-center">
          <div className="col-10 col-md-6 col-lg-4 mx-auto img-holder mb-5 mb-lg-0">
            <img
              className="w-100 bg-white d-block mx-auto"
              src={API_ADDRESS_SERVICE + this.props.data.imgPath}
              alt="وبسایت رسمی رضا رفیعی"
            />
          </div>
        </div>
      </section>
    ) : (
      <PleaseWait />
    );
  }
}
