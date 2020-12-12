import React, { Component } from "react";
import Loading from "../loading";
export class FeaturesArea extends Component {
  state = {};
  render() {
    const data = this.props.data;
    return data ? (
      <section
        id="features"
        className="services-area product-features services-area-style-two pt-100 pb-70"
      >
        <div className="container">
          <div className="section-title white-title">
            <h2 className="ir-b">ویژگی ها</h2>
          </div>

          <div className="row">
            {data.feature.map((feature, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="single-services">
                  <h3 className="ir-b text-center">{feature.title}</h3>
                  <p className="ir-r text-center">{feature.description}</p>

                  <span className="count ir-b">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="services-bg">
          <img src="/assets/img/product-features-bg.png" alt="عکس" />
        </div>
      </section>
    ) : (
      <Loading />
    );
  }
}
