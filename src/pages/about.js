import React, { Component, Fragment } from "react";
import { AboutComponent } from "../component/about/aboutSection";
import { IntroductionAbout } from "../component/about/introduction";
import { AboutTitle } from "../component/about/title";
import Loading from "../component/loading";
import { ScrollTop } from "../component/scrollTop";
import * as userService from "../service";

export class AboutPage extends Component {
  state = { data: [], arrNum: 0 };
  componentDidMount() {
    userService
      .fetchAboutUs()
      .then((res) => {
        const arrayNumber = res.data.length - 1;
        this.setState({ data: res.data, arrNum: arrayNumber });
      })
      .finally(() => this.scrollTop());
  }
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    return this.state.data[0] ? (
      <Fragment>
        <AboutTitle />
        <IntroductionAbout data={this.state.data[this.state.arrNum]} />
        <AboutComponent data={this.state.data[this.state.arrNum]} />
        <ScrollTop />
      </Fragment>
    ) : (
      <Loading />
    );
  }
}
