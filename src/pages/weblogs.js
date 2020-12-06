import React, { Component, Fragment } from "react";
import { BlogList } from "../component/blog";
import { WeblogsPageTitle } from "../component/blog/pageTitle";
import Loading from "../component/loading";
import { LoadPage } from "../component/loadPage";
import { ScrollTop } from "../component/scrollTop";
import * as userService from "../service";
import LoadingPage from "./Loading";

export class Weblogs extends Component {
  state = { data: [], loading: true };
  async componentDidMount() {
    await this.fetchData();
  }
  fetchData() {
    userService
      .fetchAllBlogs()
      .then((res) => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(() => this.props.history.push("/error"));
  }
  render() {
    return this.state.loading ? (
      <LoadingPage />
    ) : this.state.data ? (
      <Fragment>
        <LoadPage />
        <WeblogsPageTitle />
        <BlogList data={this.state.data} {...this.props} />
        <ScrollTop />
      </Fragment>
    ) : (
      <Loading />
    );
  }
}
