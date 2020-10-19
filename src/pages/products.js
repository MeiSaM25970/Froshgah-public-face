import React, { Component, Fragment } from "react";
import { FeaturesArea } from "../component/productPage/feature";
import { IntroductionProduct } from "../component/productPage/introduction";
import { OrderForm } from "../component/productPage/orderform";
import { ProductPageTitle } from "../component/productPage/title";
import { ScrollTop } from "../component/scrollTop";

export class ProductsPage extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <ProductPageTitle />
        <IntroductionProduct />
        <FeaturesArea />
        <OrderForm />
        <ScrollTop />
      </Fragment>
    );
  }
}
