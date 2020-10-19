import React, { Component, Fragment } from "react";
import { Blog } from "../component/blog";
import { FooterBottom, FooterTop } from "../component/footer";
import { Introduction } from "../component/introduction";
import Loading from "../component/loading";
import { LoadPage } from "../component/loadPage";
import { NavBar } from "../component/Navbar/navbar";
import { Pricing } from "../component/pricing";
import { Products } from "../component/products";
import { ScrollTop } from "../component/scrollTop";
import * as userService from "../service";
import LoadingPage from "./Loading";

export class HomePage extends Component {
  state = { data: [], loading: true };
  async componentDidMount() {
    await this.fetchData();
  }
  fetchData() {
    userService
      .getProduct()
      .then((res) => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(() => window.location.replace("/error"));
  }
  render() {
    return this.state.loading ? (
      <LoadingPage />
    ) : this.state.data ? (
      <Fragment>
        <LoadPage />
        <Introduction />
        <Products data={this.state.data} />
        <Pricing data={this.state.data} />
        <Blog />
        <ScrollTop />
      </Fragment>
    ) : (
      <Loading />
    );
  }
}
