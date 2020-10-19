import React, { Component } from "react";
export class IntroductionAbout extends Component {
  state = {};
  render() {
    return (
      <section class="about-intro mt-0">
        <div class="row d-lg-flex align-items-lg-center">
          <div class="col-10 col-md-6 col-lg-4 mx-auto img-holder mb-5 mb-lg-0">
            <img
              class="w-100 bg-white d-block mx-auto"
              src="/assets/img/testimonials-img-2.jpg"
              alt="وبسایت رسمی رضا رفیعی"
            />
          </div>
        </div>
      </section>
    );
  }
}
