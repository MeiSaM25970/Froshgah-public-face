import React, { Component } from "react";
import { API_ADDRESS_SERVICE } from "../../env";
import Loading from "../loading";

export class IntroductionProduct extends Component {
  state = {};
  render() {
    return this.props.data ? (
      <section className="index-intro">
        <div className="container">
          <div className="row d-lg-flex align-items-lg-center">
            <div className="col-md-5 img-holder mb-5 mb-lg-0">
              <img
                className="w-75 d-block mx-auto"
                src={API_ADDRESS_SERVICE + this.props.data.img}
                alt="وبسایت رسمی رضا فرجی"
              />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <h1 className="d-block text-right ir-b mb-3">
                {this.props.data.title}
              </h1>
              <p className="d-block text-justify ir-r mb-3">
                {this.props.data.description}
              </p>
              <a className="default-btn ml-2 ir-r mb-0" href="#order">
                سفارش این محصول
              </a>
              <a className="primary-btn ir-r mb-0" href="#features">
                اطلاعات بیشتر
              </a>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <Loading />
    );
  }
}
