import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import * as userService from "../../service";
import PleaseWait from "../loading/pleaseWait";

export class NavBar extends Component {
  state = {
    closeStyle: "navbar-nav m-auto  is-close",
    openStyle: "navbar-nav m-auto  is-open",
    isOpen: false,
    openDropStyle: "block",
    openDropClick1: false,
    openDropClick2: false,
    closeDropStyle: "none",
    data: [],
    categories: [],
  };
  componentDidMount() {
    this.fetchData();
    this.fetchCategories();
  }
  fetchData() {
    userService
      .getProduct()
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
  }
  fetchCategories() {
    userService
      .fetchCategories()
      .then((res) => this.setState({ categories: res.data }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <Fragment>
        <header className="header-area">
          {/* <!-- Start Top Header --> */}
          <div className="top-header">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-12 col-sm-8 pl-0">
                  <span className="d-block text-white ir-r text-right pr-3">
                    ما به رشد هر چه بهتر زبان انگلیسی شما می‌اندیشیم.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Start Top Header --> */}

          {/* <!-- Start Nav Area --> */}
          <div className="navbar-area">
            <div className="mobile-nav mean-container">
              <div className="mean-bar">
                <a
                  href="#nav"
                  className=" meanmenu-reveal"
                  style={{ right: "0", left: "auto" }}
                  onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                >
                  <span>
                    <span>
                      <span></span>
                    </span>
                  </span>
                </a>
                <nav className="mean-nav ">
                  <ul
                    className={
                      this.state.isOpen
                        ? this.state.openStyle
                        : this.state.closeStyle
                    }
                  >
                    <li className="nav-item">
                      <Link
                        to="/"
                        className="nav-link ir-r active"
                        onClick={() => this.setState({ isOpen: false })}
                      >
                        {" "}
                        خانه{" "}
                      </Link>
                    </li>

                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link ir-r"
                        onClick={() => {
                          this.setState({
                            openDropClick1: !this.state.openDropClick1,
                          });
                        }}
                      >
                        دوره های آموزشی
                        <i className="bx bx-chevron-down"></i>
                      </a>

                      <ul
                        className="dropdown-menu"
                        style={
                          this.state.openDropClick1
                            ? { display: this.state.openDropStyle }
                            : { display: this.state.closeDropStyle }
                        }
                      >
                        {this.state.data.length > 0 ? (
                          this.state.data.map((product, index) => (
                            <li className="nav-item" key={index}>
                              <Link
                                to={"/products/" + product._id}
                                className="nav-link ir-r active"
                                onClick={() => this.setState({ isOpen: false })}
                              >
                                {product.title}
                              </Link>
                            </li>
                          ))
                        ) : (
                          <PleaseWait />
                        )}
                      </ul>
                      <a
                        className="mean-expand"
                        href="#"
                        style={{ fontSize: "18px" }}
                        onClick={() => {
                          this.setState({
                            openDropClick1: !this.state.openDropClick1,
                          });
                        }}
                      >
                        {this.state.openDropClick1 ? "-" : "+"}
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link ir-r"
                        onClick={() => {
                          this.setState({
                            openDropClick2: !this.state.openDropClick2,
                          });
                        }}
                      >
                        مقالات آموزشی
                        <i className="bx bx-chevron-down"></i>
                      </a>

                      <ul
                        className="dropdown-menu"
                        style={
                          this.state.openDropClick2
                            ? { display: this.state.openDropStyle }
                            : { display: this.state.closeDropStyle }
                        }
                      >
                        {this.state.categories.length > 0 ? (
                          this.state.categories.map((item, index) => (
                            <li className="nav-item" key={index}>
                              <Link
                                to={`/weblogs/category/${item._id}`}
                                className="nav-link ir-r "
                                onClick={() => this.setState({ isOpen: false })}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))
                        ) : (
                          <PleaseWait />
                        )}
                      </ul>
                      <a
                        className="mean-expand"
                        href="#"
                        style={{ fontSize: "18px" }}
                        onClick={() => {
                          this.setState({
                            openDropClick2: !this.state.openDropClick2,
                          });
                        }}
                      >
                        {this.state.openDropClick2 ? "-" : "+"}
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/tracking"
                        className="nav-link ir-r"
                        onClick={() => this.setState({ isOpen: false })}
                      >
                        {" "}
                        پیگیری سفارشات{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/about"
                        className="nav-link ir-r"
                        onClick={() => this.setState({ isOpen: false })}
                      >
                        {" "}
                        درباره ما{" "}
                      </Link>
                    </li>

                    <li className="nav-item mean-last">
                      <Link
                        to="/contact"
                        className="nav-link ir-r"
                        onClick={() => this.setState({ isOpen: false })}
                      >
                        {" "}
                        تماس با ما{" "}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="container-fluid">
                <a href="index.html" className="logo">
                  <img
                    className="logo-img"
                    src="/assets/img/logo.png"
                    alt="Logo"
                  />
                </a>
              </div>
            </div>

            <div className="main-nav">
              <div className="container-fluid">
                <nav className="navbar navbar-expand-md">
                  <Link
                    className="navbar-brand"
                    to="/"
                    onClick={() => this.setState({ isOpen: false })}
                  >
                    <img
                      className="logo-img"
                      src="/assets/img/logo.png"
                      alt="Logo"
                    />
                  </Link>

                  <div className="mean-push"></div>
                  <div
                    className="collapse navbar-collapse mean-menu"
                    // style={
                    //   this.state.isOpen
                    //     ? { display: this.state.openStyle }
                    //     : { display: this.state.closeStyle }
                    // }
                  >
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <Link
                          to="/"
                          className="nav-link ir-r active"
                          onClick={() => this.setState({ isOpen: false })}
                        >
                          {" "}
                          خانه{" "}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link ir-r">
                          دوره های آموزشی
                          <i className="bx bx-chevron-down"></i>
                        </a>

                        <ul className="dropdown-menu">
                          {this.state.data.length > 0 ? (
                            this.state.data.map((product, index) => (
                              <li className="nav-item" key={index}>
                                <Link
                                  to={"/products/" + product._id}
                                  className="nav-link ir-r"
                                  onClick={() =>
                                    this.setState({ isOpen: false })
                                  }
                                >
                                  {product.title}
                                </Link>
                              </li>
                            ))
                          ) : (
                            <PleaseWait />
                          )}
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link ir-r">
                          مقالات آموزشی
                          <i className="bx bx-chevron-down"></i>
                        </a>

                        <ul className="dropdown-menu">
                          {this.state.categories.length > 0 ? (
                            this.state.categories.map((item, index) => (
                              <li className="nav-item" key={index}>
                                <Link
                                  to={`/weblogs/category/${item._id}`}
                                  className="nav-link ir-r "
                                  onClick={() =>
                                    this.setState({ isOpen: false })
                                  }
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))
                          ) : (
                            <PleaseWait />
                          )}
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/tracking"
                          className="nav-link ir-r"
                          onClick={() => this.setState({ isOpen: false })}
                        >
                          {" "}
                          پیگیری سفارشات{" "}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/about"
                          className="nav-link ir-r"
                          onClick={() => this.setState({ isOpen: false })}
                        >
                          {" "}
                          درباره ما{" "}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/contact"
                          className="nav-link ir-r"
                          onClick={() => this.setState({ isOpen: false })}
                        >
                          {" "}
                          تماس با ما{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* <!-- End Nav Area --> */}
        </header>
      </Fragment>
    );
  }
}
