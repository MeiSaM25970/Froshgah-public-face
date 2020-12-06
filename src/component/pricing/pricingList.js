import React, { Component } from "react";
import numeral from "numeral";
import Loading from "../loading";
import { Link } from "react-router-dom";

export class PricingList extends Component {
  state = {};
  render() {
    return this.props.data ? (
      this.props.data.map((item, index) => (
        <div className="col-lg-5 col-sm-6 mr-auto" key={index}>
          <Link to={"/products/" + item._id}>
            <div className="single-price-card">
              <div className="price-title">
                <h3 className="ir-b">{item.title}</h3>
                <h2 className="ir-b price-responsive">
                  {numeral(item.price).format("0,0")}
                  <sub>{"تومان "}</sub>
                </h2>
              </div>

              <ul>
                {item.feature.map((feature, index) => (
                  <li className="ir-r" key={index}>
                    {feature.title}
                  </li>
                ))}
              </ul>

              <span
                href="#"
                className="default-btn ir-r d-flex justify-content-center"
              >
                جزئیات
                <span className="flaticon-next d-block mr-2"></span>
              </span>
            </div>
          </Link>
        </div>
      ))
    ) : (
      <Loading />
    );
  }
}
