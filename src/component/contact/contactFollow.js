import React, { Component } from "react";
import validator from "validator";
import Loading from "../loading";
export class ContactTellAndFollow extends Component {
  state = {};
  render() {
    const data = this.props.data;
    return data ? (
      <div className="col-lg-4">
        <div className="contact-info ptb-100">
          <h3 className="ir-b">راه های ارتباطی</h3>
          <p className="ir-r">
            از طریق این راه ها می‌توانید با ما در ارتباط باشید.
          </p>

          <ul className="address">
            <li className="location ir-r">
              <i className="bx bxs-location-plus"></i>
              <span className="ir-b">آدرس</span>
              {data[0].address}
            </li>
            <li className="ir-r">
              <i className="bx bxs-phone-call"></i>
              <span className="ir-b">شماره تماس</span>
              <a dir="ltr" href={"tel:" + data[0].mobile1}>
                {data[0].mobile1}
              </a>
              <a dir="ltr" href={"tel:" + data[0].mobile2}>
                {data[0].mobile2}
              </a>
            </li>
            <li className="ir-r">
              <i className="bx bxs-envelope"></i>
              <span className="ir-b">ایمیل</span>
              <a dir="ltr" href={"mailto:" + data[0].email}>
                {data[0].email}{" "}
              </a>
            </li>
          </ul>

          <div className="sidebar-follow-us">
            <h3 className="ir-b">ما را در شبکه های مجازی دنبال کنید:</h3>

            <ul className="social-wrap">
              {!validator.isEmpty(data[0].twitter) && (
                <li>
                  <a href={data[0].twitter} target="_blank" rel="noreferrer">
                    <i className="bx bxl-twitter"></i>
                  </a>
                </li>
              )}
              {!validator.isEmpty(data[0].facebook) && (
                <li>
                  <a href={data[0].facebook} target="_blank" rel="noreferrer">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
              )}
              {!validator.isEmpty(data[0].instagram) && (
                <li>
                  <a href={data[0].instagram} target="_blank" rel="noreferrer">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
              )}
              {!validator.isEmpty(data[0].linkedIn) && (
                <li>
                  <a href={data[0].linkedIn} target="_blank" rel="noreferrer">
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
                  <a href={data[0].telegram} target="_blank" rel="noreferrer">
                    <i className="bx bxl-telegram"></i>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    ) : (
      <Loading />
    );
  }
}
