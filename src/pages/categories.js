import React, { Component, Fragment } from "react";
import { BlogList } from "../component/blog";
import { CategoriesPageTitle } from "../component/categories";
import Loading from "../component/loading";
import { LoadPage } from "../component/loadPage";
import { ScrollTop } from "../component/scrollTop";
import * as userService from "../service";
import LoadingPage from "./Loading";

export class CategoriesBlogs extends Component {
  state = { data: [], loading: true };
  async componentDidMount() {
    const id = this.props.match.params.id;

    await this.fetchData(id);
  }

  fetchData(id) {
    userService
      .filterWeblogByCategory(id)
      .then((res) => {
        this.setState({ data: res.data, loading: false });
      })
      .catch(() => this.props.history.push("/error"))
      .finally(() => this.scrollTop());
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      const id = newProps.match.params.id;
      this.fetchData(id);
    }
  }
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    return this.state.loading ? (
      <LoadingPage />
    ) : this.state.data ? (
      <Fragment>
        <LoadPage />
        <CategoriesPageTitle category={this.state.category} {...this.props} />
        <BlogList data={this.state.data} {...this.props} />
        <ScrollTop />
      </Fragment>
    ) : (
      <Loading />
    );
  }
}
