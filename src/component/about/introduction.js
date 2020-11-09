import React, { Component } from "react";
export class IntroductionAbout extends Component {
  state = {};
  render() {
    return (
      <section className="about-intro mt-30">
        <div className="row d-lg-flex align-items-lg-center">
          <div className="col-10 col-md-6 col-lg-4 mx-auto img-holder mb-5 mb-lg-0">
            <img
              className="w-100 bg-white d-block mx-auto"
              src="/assets/img/testimonials-img-2.jpg"
              alt="وبسایت رسمی رضا رفیعی"
            />
          </div>
        </div>
      </section>
    );
  }
}
