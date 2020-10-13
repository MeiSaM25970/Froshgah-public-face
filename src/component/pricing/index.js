import React, { Component } from "react";

export class Pricing extends Component {
  state = {};
  render() {
    return (
      <section className="price-area price-area-style-two pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="ir-r">قیمت محصولات</span>
            <h2 className="ir-b">یکی از محصولات رو انتخاب کن:</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 mr-auto">
              <div className="single-price-card">
                <div className="price-title">
                  <h3 className="ir-b">محصول 1</h3>
                  <h2 className="ir-b price-responsive">
                    400,000<sub>{"تومان "}</sub>
                  </h2>
                </div>

                <ul>
                  <li className="ir-r">یادگیری به شیوه مادری</li>
                  <li className="ir-r">به شیوه کاربردی</li>
                  <li className="ir-r">بدون خستگی</li>
                  <li className="ir-r">بدون یادگیری لغات</li>
                  <li className="ir-r">بدون یادگیری گرامر</li>
                </ul>

                <a
                  href="#"
                  className="default-btn ir-r d-flex justify-content-center"
                >
                  پرداخت
                  <span className="flaticon-next d-block mr-2"></span>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 ml-auto">
              <div className="single-price-card active">
                <div className="price-title">
                  <h3 className="ir-b">محصول 2</h3>
                  <h2 className="ir-b price-responsive">
                    800,000<sub>{"تومان "}</sub>
                  </h2>
                </div>

                <ul>
                  <li className="ir-r">یادگیری به شیوه مادری</li>
                  <li className="ir-r">به شیوه کاربردی</li>
                  <li className="ir-r">بدون خستگی</li>
                  <li className="ir-r">بدون یادگیری لغات</li>
                  <li className="ir-r">بدون یادگیری گرامر</li>
                </ul>

                <a
                  href="#"
                  className="default-btn ir-r d-flex justify-content-center"
                >
                  پرداخت
                  <span className="flaticon-next d-flex mr-2"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
