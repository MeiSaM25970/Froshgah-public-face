import React, { Component, Fragment } from "react";
import { BlogList } from "../component/blog";
import { Introduction } from "../component/introduction";
import Loading from "../component/loading";
import { LoadPage } from "../component/loadPage";
import { Pricing } from "../component/pricing";
import { Products } from "../component/products";
import { ScrollTop } from "../component/scrollTop";
import * as userService from "../service";
import LoadingPage from "./Loading";

export class HomePage extends Component {
  state = { data: [], loading: true };
  async componentDidMount() {
    await this.fetchWeblog();
    await this.counter();
  }

  counter() {
    userService.counter();
  }
  fetchWeblog() {
    userService
      .fetchWeblog()
      .then((res) => this.setState({ weblog: res.data, loading: false }))
      .catch((err) => {
        this.setState({ loading: false });
        console.log(err);
      });
  }
  render() {
    const products = this.props.products;
    return this.state.loading ? (
      <LoadingPage />
    ) : this.state.data ? (
      <Fragment>
        <LoadPage />
        <Introduction />
        <Products data={products} />
        <Pricing data={this.state.data} />
        <BlogList data={this.state.weblog} {...this.props} />
        <ScrollTop />
      </Fragment>
    ) : (
      <Loading />
    );
  }
}
