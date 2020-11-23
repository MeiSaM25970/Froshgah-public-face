import React, { Component, Fragment } from "react";
import { AboutComponent } from "../component/about/aboutSection";
import { IntroductionAbout } from "../component/about/introduction";
import { AboutTitle } from "../component/about/title";
import { ScrollTop } from "../component/scrollTop";

export class AboutPage extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <AboutTitle />
        <IntroductionAbout />
        <AboutComponent />
        <ScrollTop />
      </Fragment>
    );
  }
}
