import React, { Component } from "react";
import { Product } from "./product";
export class Products extends Component {
  state = {};
  render() {
    return (
      <section
        id="products"
        className="services-area services-area-style-two pt-100 pb-70"
      >
        <div className="container">
          <div className="section-title">
            <span className="ir-b">محصولات</span>
            <h2 className="ir-r text-white">محصولات آموزشی</h2>
          </div>

          <div className="row ">
            <Product data={this.props.data} />
          </div>
        </div>

        <div className="services-bg">
          <img src="/assets/img/services-bg.jpg" alt="Image" />
        </div>
      </section>
    );
  }
}
