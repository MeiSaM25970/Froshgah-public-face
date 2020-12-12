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
  state = { data: [], loading: true, about: [] };
  async componentDidMount() {
    await this.fetchWeblog();
    await this.counter();
    await this.fetchAbout();
  }

  counter() {
    userService.counter();
  }
  fetchWeblog() {
    userService
      .fetchWeblog()
      .then((res) => this.setState({ weblog: res.data }))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({ loading: false });
        this.scrollTop();
      });
  }
  fetchAbout() {
    userService
      .fetchAboutUs()
      .then((res) => this.setState({ about: res.data }))
      .catch(() => console.log({ msg: "can not fetch about" }))
      .finally(() => this.setState({ loading: false }));
  }
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    const products = this.props.products;
    return this.state.loading ? (
      <LoadingPage />
    ) : this.state.data ? (
      <Fragment>
        <LoadPage />
        <Introduction data={this.state.about} />
        <Products data={products} />
        <Pricing data={products} />
        <BlogList data={this.state.weblog} {...this.props} />
        <ScrollTop />
      </Fragment>
    ) : (
      <Loading />
    );
  }
}
