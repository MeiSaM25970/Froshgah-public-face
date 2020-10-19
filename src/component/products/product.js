import React, { Component } from "react";
import { API_ADDRESS_SERVICE } from "../../env";
import Loading from "../loading";

export class Product extends Component {
  state = {};
  render() {
    return this.props.data ? (
      this.props.data.map((item, index) => (
        <div className="col-lg-5 col-sm-6 mr-auto mt-100" key={index}>
          <div className="single-services">
            {/* <i className="flaticon-estimate"></i> */}
            <img src={API_ADDRESS_SERVICE + item.img} alt="product" />
            <h3 className="ir-b mt-3">{item.title}</h3>
            <p className="ir-r">{item.description}</p>

            <a href="single-services.html" className="read-more ir-r">
              اطلاعات بیشتر
              <span className="flaticon-next"></span>
            </a>
          </div>
        </div>
      ))
    ) : (
      <Loading />
    );
  }
}
