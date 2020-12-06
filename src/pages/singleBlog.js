import React, { Component, Fragment } from "react";
import Loading from "../component/loading";
import { ScrollTop } from "../component/scrollTop";
import { SingleBlogTitle } from "../component/singleBlog/pageTitle";
import { SingleBlog } from "../component/singleBlog/singleBlog";
import * as userService from "../service";

export class SingleBlogPage extends Component {
  state = { data: {} };
  componentDidMount() {
    this.fetchData();
    this.fetchCategories();
  }
  fetchData() {
    const weblogId = this.props.match.params.id;
    userService
      .weblogFindById(weblogId)
      .then((res) => this.setState({ data: res.data }))
      .catch(() => this.props.history.push("/error"));
  }
  fetchCategories() {
    userService
      .fetchCategories()
      .then((res) => this.setState({ categories: res.data }));
  }
  render() {
    return this.state.data ? (
      <Fragment>
        <SingleBlogTitle data={this.state.data} {...this.props} />
        <SingleBlog
          data={this.state.data}
          {...this.props}
          categories={this.state.categories}
        />
        <ScrollTop />
      </Fragment>
    ) : (
      <Loading />
    );
  }
}
