import React, { Component, Fragment } from "react";
import { Blog } from "../component/blog";
import { FooterBottom, FooterTop } from "../component/footer";
import { Introduction } from "../component/introduction";
import { LoadPage } from "../component/loadPage";
import { NavBar } from "../component/Navbar/navbar";
import { Pricing } from "../component/pricing";
import { Products } from "../component/products";
import { ScrollTop } from "../component/scrollTop";

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <LoadPage />
        <NavBar />
        <Introduction />
        <Products />
        <Pricing />
        <Blog />
        <FooterTop />
        <FooterBottom />
        <ScrollTop />
      </Fragment>
    );
  }
}
