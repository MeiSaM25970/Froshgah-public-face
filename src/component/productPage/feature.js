import React, { Component } from "react";
export class FeaturesArea extends Component {
  state = {};
  render() {
    return (
      <section
        id="features"
        className="services-area product-features services-area-style-two pt-100 pb-70"
      >
        <div className="container">
          <div className="section-title white-title">
            <h2 className="ir-b">ویژگی ها</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3 className="ir-b text-center">یادگیری آسان</h3>
                <p className="ir-r text-center">
                  به راحتی زبان انگلیسی را یاد بگیرید و بهترین بازده را داشته
                  باشید.
                </p>

                <span className="count ir-b">1</span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3 className="ir-b text-center">بدون خستگی</h3>
                <p className="ir-r text-center">
                  به راحتی زبان انگلیسی را یاد بگیرید و بهترین بازده را داشته
                  باشید.
                </p>

                <span className="count ir-b">2</span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3 className="ir-b text-center">با متن بلند</h3>
                <p className="ir-r text-center">
                  به راحتی زبان انگلیسی را یاد بگیرید و بهترین بازده را داشته
                  باشید.
                </p>

                <span className="count ir-b">3</span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3 className="ir-b text-center">با اشانتیون متن کوتاه</h3>
                <p className="ir-r text-center">
                  به راحتی زبان انگلیسی را یاد بگیرید و بهترین بازده را داشته
                  باشید.
                </p>

                <span className="count ir-b">4</span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3 className="ir-b text-center">با طرح های فضایی</h3>
                <p className="ir-r text-center">
                  به راحتی زبان انگلیسی را یاد بگیرید و بهترین بازده را داشته
                  باشید.
                </p>

                <span className="count ir-b">5</span>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services">
                <h3 className="ir-b text-center">یادگیری آسان</h3>
                <p className="ir-r text-center">
                  به راحتی زبان انگلیسی را یاد بگیرید و بهترین بازده را داشته
                  باشید.
                </p>

                <span className="count ir-b">6</span>
              </div>
            </div>
          </div>
        </div>

        <div className="services-bg">
          <img src="assets/img/product-features-bg.png" alt="Image" />
        </div>
      </section>
    );
  }
}
