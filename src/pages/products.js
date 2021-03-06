import React, { Component, Fragment } from "react";
import { FeaturesArea } from "../component/productPage/feature";
import { IntroductionProduct } from "../component/productPage/introduction";
import { OrderForm } from "../component/productPage/orderform";
import { ProductPageTitle } from "../component/productPage/title";
import { ScrollTop } from "../component/scrollTop";
import * as userService from "../service";

export class ProductsPage extends Component {
  state = {};
  componentDidMount() {
    const productId = this.props.match.params.id;
    this.fetchData(productId);
  }

  fetchData(id) {
    userService
      .getProductById(id)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch(() => console.log({ msg: "خطای اتصال به سرور." }))
      .finally(() => this.scrollTop());
  }
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchData(newProps.match.params.id);
    }
  }
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    return (
      <Fragment>
        <ProductPageTitle data={this.state.data} />
        <IntroductionProduct data={this.state.data} />
        <FeaturesArea data={this.state.data} />
        <OrderForm data={this.state.data} />
        <ScrollTop />
      </Fragment>
    );
  }
}
