import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import LoadingPage from "../../pages/Loading";
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
    activePage: {
      home: true,
    },
  };
  async componentDidMount() {
    await this.fetchCategories();
  }

  fetchCategories() {
    userService
      .fetchCategories()
      .then((res) => this.setState({ categories: res.data }))
      .catch((err) => console.log(err));
  }
  render() {
    const products = this.props.products;
    return products ? (
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
                <Link
                  to="#nav"
                  className=" meanmenu-reveal"
                  style={{ right: "0", left: "auto" }}
                  onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                >
                  <span>
                    <span>
                      <span></span>
                    </span>
                  </span>
                </Link>
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
                        className={
                          this.state.activePage.home
                            ? "nav-link ir-r active"
                            : "nav-link ir-r"
                        }
                        onClick={() =>
                          this.setState({
                            isOpen: false,
                            activePage: { home: true },
                          })
                        }
                      >
                        {" "}
                        خانه{" "}
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="#"
                        className={
                          this.state.activePage.product
                            ? "nav-link ir-r active"
                            : "nav-link ir-r"
                        }
                        onClick={() => {
                          this.setState({
                            openDropClick1: !this.state.openDropClick1,
                            activePage: { product: true },
                          });
                        }}
                      >
                        دوره های آموزشی
                        <i className="bx bx-chevron-down"></i>
                      </Link>

                      <ul
                        className="dropdown-menu"
                        style={
                          this.state.openDropClick1
                            ? { display: this.state.openDropStyle }
                            : { display: this.state.closeDropStyle }
                        }
                      >
                        {products ? (
                          products.map((product, index) => (
                            <li
                              className={
                                this.state.activePage.product
                                  ? "nav-link ir-r active"
                                  : "nav-link ir-r"
                              }
                              key={index}
                            >
                              <Link
                                to={"/products/" + product._id}
                                className="nav-link ir-r"
                                onClick={() =>
                                  this.setState({
                                    isOpen: false,
                                    activePage: { product: true },
                                  })
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
                      <Link
                        className="mean-expand"
                        to="#"
                        style={{ fontSize: "18px" }}
                        onClick={() => {
                          this.setState({
                            openDropClick1: !this.state.openDropClick1,
                            activePage: { product: true },
                          });
                        }}
                      >
                        {this.state.openDropClick1 ? "-" : "+"}
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="#"
                        className={
                          this.state.activePage.weblog
                            ? "nav-link ir-r active"
                            : "nav-link ir-r"
                        }
                        onClick={() => {
                          this.setState({
                            openDropClick2: !this.state.openDropClick2,
                            activePage: { weblog: true },
                          });
                        }}
                      >
                        مقالات آموزشی
                        <i className="bx bx-chevron-down"></i>
                      </Link>

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
                                onClick={() =>
                                  this.setState({
                                    isOpen: false,
                                    activePage: { weblog: true },
                                  })
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
                      <Link
                        className="mean-expand"
                        to="#"
                        style={{ fontSize: "18px" }}
                        onClick={() => {
                          this.setState({
                            openDropClick2: !this.state.openDropClick2,
                            activePage: { weblog: true },
                          });
                        }}
                      >
                        {this.state.openDropClick2 ? "-" : "+"}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/tracking"
                        className={
                          this.state.activePage.tracking
                            ? "nav-link ir-r active"
                            : "nav-link ir-r"
                        }
                        onClick={() =>
                          this.setState({
                            isOpen: false,
                            activePage: { tracking: true },
                          })
                        }
                      >
                        پیگیری سفارشات
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/about"
                        className={
                          this.state.activePage.about
                            ? "nav-link ir-r active"
                            : "nav-link ir-r"
                        }
                        onClick={() =>
                          this.setState({
                            isOpen: false,
                            activePage: { about: true },
                          })
                        }
                      >
                        درباره ما
                      </Link>
                    </li>

                    <li className="nav-item mean-last">
                      <Link
                        to="/contact"
                        className={
                          this.state.activePage.contact
                            ? "nav-link ir-r active"
                            : "nav-link ir-r"
                        }
                        onClick={() =>
                          this.setState({
                            isOpen: false,
                            activePage: { contact: true },
                          })
                        }
                      >
                        {" "}
                        تماس با ما{" "}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="container-fluid">
                <Link to="/" className="logo">
                  <img
                    className="logo-img"
                    src="/assets/img/logo.png"
                    alt="Logo"
                  />
                </Link>
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
                  <div className="collapse navbar-collapse mean-menu">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                        <Link
                          to="/"
                          className={
                            this.state.activePage.home
                              ? "nav-link ir-r active"
                              : "nav-link ir-r"
                          }
                          onClick={() =>
                            this.setState({
                              isOpen: false,
                              activePage: { home: true },
                            })
                          }
                        >
                          {" "}
                          خانه{" "}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="#"
                          className={
                            this.state.activePage.product
                              ? "nav-link ir-r active"
                              : "nav-link ir-r"
                          }
                        >
                          دوره های آموزشی
                          <i className="bx bx-chevron-down"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          {products ? (
                            products.map((product, index) => (
                              <li className="nav-item" key={index}>
                                <Link
                                  to={"/products/" + product._id}
                                  className="nav-link ir-r"
                                  onClick={() =>
                                    this.setState({
                                      isOpen: false,
                                      activePage: { product: true },
                                    })
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
                        <Link
                          to="#"
                          className={
                            this.state.activePage.weblog
                              ? "nav-link ir-r active"
                              : "nav-link ir-r"
                          }
                        >
                          مقالات آموزشی
                          <i className="bx bx-chevron-down"></i>
                        </Link>

                        <ul className="dropdown-menu">
                          {this.state.categories.length > 0 ? (
                            this.state.categories.map((item, index) => (
                              <li className="nav-item" key={index}>
                                <Link
                                  to={`/weblogs/category/${item._id}`}
                                  className="nav-link ir-r "
                                  onClick={() =>
                                    this.setState({
                                      isOpen: false,
                                      activePage: { weblog: true },
                                    })
                                  }
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))
                          ) : (
                            <PleaseWait />
                          )}
                          <li className="nav-item">
                            <Link
                              to={`/weblogs`}
                              className="nav-link ir-r "
                              onClick={() =>
                                this.setState({
                                  isOpen: false,
                                  activePage: { weblog: true },
                                })
                              }
                            >
                              همه مقالات
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/tracking"
                          className={
                            this.state.activePage.tracking
                              ? "nav-link ir-r active"
                              : "nav-link ir-r"
                          }
                          onClick={() =>
                            this.setState({
                              isOpen: false,
                              activePage: { tracking: true },
                            })
                          }
                        >
                          {" "}
                          پیگیری سفارشات{" "}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/about"
                          className={
                            this.state.activePage.about
                              ? "nav-link ir-r active"
                              : "nav-link ir-r"
                          }
                          onClick={() =>
                            this.setState({
                              isOpen: false,
                              activePage: { about: true },
                            })
                          }
                        >
                          {" "}
                          درباره ما{" "}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          to="/contact"
                          className={
                            this.state.activePage.contact
                              ? "nav-link ir-r active"
                              : "nav-link ir-r"
                          }
                          onClick={() =>
                            this.setState({
                              isOpen: false,
                              activePage: { contact: true },
                            })
                          }
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
    ) : (
      <LoadingPage />
    );
  }
}
