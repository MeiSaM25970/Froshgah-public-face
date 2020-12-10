import React, { Component } from "react";
import { Link } from "react-router-dom";
export class FooterTop extends Component {
  state = {};

  render() {
    let products = this.props.products;
    return (
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <a href="index.html">
                  <img
                    className="logo-img"
                    src="/assets/img/logo.png"
                    alt="عکس"
                  />
                </a>

                <p className="ir-r">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>

                <ul className="social-icon">
                  <li>
                    <a href="#">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-linkedin-square"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <h3 className="ir-b">لینک های مهم</h3>

                <ul className="import-link">
                  {products
                    ? products.map((product, index) => (
                        <li key={index}>
                          <Link
                            to={`/products/${product._id}`}
                            className="ir-r"
                            href="#"
                          >
                            {product.title}
                          </Link>
                        </li>
                      ))
                    : ""}
                  <li>
                    <Link to="/weblogs" className="ir-r" href="#">
                      وبلاگ
                    </Link>
                  </li>
                  <li>
                    <Link className="ir-r" to="/about">
                      درباره ما
                    </Link>
                  </li>
                  <li>
                    <Link className="ir-r" to="contact">
                      تماس با ما
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <h3 className="ir-b">تماس با ما</h3>

                <ul className="address">
                  <li className="location ir-r">
                    <i className="bx bxs-location-plus"></i>
                    تهران، میدان آزادی، نمایشگاه بین المللی شهر آفتاب.
                  </li>
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <a
                      className="ir-r"
                      href="mailto:hello@example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hello@example.com
                    </a>
                  </li>
                  <li>
                    <i className="bx bxs-phone-call"></i>
                    <a className="ir-r" href="tel:09121111111">
                      0912-111-1111
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
