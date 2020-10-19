import React, { Component } from "react";
import { PricingList } from "./pricingList";

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
            <PricingList data={this.props.data} />
          </div>
        </div>
      </section>
    );
  }
}
