import React, { Component } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { API_ADDRESS_SERVICE } from "../../env";
import Loading from "../loading";
export class FooterTop extends Component {
  state = {};

  render() {
    let products = this.props.products;
    let data = this.props.footerDetail;
    return data ? (
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <Link to="/">
                  <img
                    className="logo-img"
                    src={
                      data.length > 0
                        ? API_ADDRESS_SERVICE + data[0].imgPath
                        : "/assets/img/logo.png"
                    }
                    alt="عکس"
                  />
                </Link>

                {data.length > 0 && (
                  <p className="ir-r">{data[0].description}</p>
                )}

                <ul className="social-icon">
                  {data.length > 0 && (
                    <div>
                      {!validator.isEmpty(data[0].twitter) && (
                        <li>
                          <a
                            href={data[0].twitter}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-twitter"></i>
                          </a>
                        </li>
                      )}
                      {!validator.isEmpty(data[0].facebook) && (
                        <li>
                          <a
                            href={data[0].facebook}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-facebook"></i>
                          </a>
                        </li>
                      )}
                      {!validator.isEmpty(data[0].instagram) && (
                        <li>
                          <a
                            href={data[0].instagram}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-instagram"></i>
                          </a>
                        </li>
                      )}
                      {!validator.isEmpty(data[0].linkedIn) && (
                        <li>
                          <a
                            href={data[0].linkedIn}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-linkedin-square"></i>
                          </a>
                        </li>
                      )}
                      {!validator.isEmpty(data[0].whatsApp) && (
                        <li>
                          <a
                            href={"whatsapp://send/?phone=" + data[0].whatsApp}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-whatsapp-square"></i>
                          </a>
                        </li>
                      )}
                      {!validator.isEmpty(data[0].telegram) && (
                        <li>
                          <a
                            href={data[0].telegram}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="bx bxl-telegram"></i>
                          </a>
                        </li>
                      )}
                    </div>
                  )}
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
                    <Link className="ir-r" to="/contact">
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
                  {data.length > 0 && (
                    <div>
                      <li className="location ir-r">
                        <i className="bx bxs-location-plus"></i>
                        {data[0].address}
                      </li>
                      <li>
                        <i className="bx bxs-envelope"></i>
                        <a
                          className="ir-r"
                          href={`mailto:` + data[0].email}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data[0].email}{" "}
                        </a>
                      </li>
                      <li>
                        <i className="bx bxs-phone-call"></i>
                        <a className="ir-r" href={"tel:" + data[0].mobile1}>
                          {data[0].mobile1}
                        </a>
                        <a className="ir-r" href={"tel:" + data[0].mobile2}>
                          {data[0].mobile2}
                        </a>
                        <a className="ir-r" href={"tel:" + data[0].tel}>
                          {data[0].tel}
                        </a>
                      </li>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    ) : (
      <Loading />
    );
  }
}
