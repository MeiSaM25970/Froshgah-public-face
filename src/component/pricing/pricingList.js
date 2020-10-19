import React, { Component } from "react";
import numeral from "numeral";
import Loading from "../loading";

export class PricingList extends Component {
  state = {};
  render() {
    console.log(this.props);
    return this.props.data ? (
      this.props.data.map((item, index) => (
        <div className="col-lg-4 col-sm-6 mr-auto" key={index}>
          <div className="single-price-card">
            <div className="price-title">
              <h3 className="ir-b">{item.title}</h3>
              <h2 className="ir-b price-responsive">
                {numeral(item.price).format("0,0")}
                <sub>{"تومان "}</sub>
              </h2>
            </div>

            <ul>
              <li className="ir-r">{item.feature1}</li>
              <li className="ir-r">{item.feature2}</li>
              <li className="ir-r">{item.feature3}</li>
              <li className="ir-r">{item.feature4}</li>
              <li className="ir-r">{item.feature5}</li>
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
      ))
    ) : (
      <Loading />
    );
  }
}
