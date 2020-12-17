import React, { Component } from "react";
import { Link } from "react-router-dom";
export class ContactTellAndFollow extends Component {
  state = {};
  render() {
    return (
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
              تهران، بلوار رسالت، میدان آرژانتین.
            </li>
            <li className="ir-r">
              <i className="bx bxs-phone-call"></i>
              <span className="ir-b">شماره تماس</span>
              <a dir="ltr" href="tel:09121112222">
                0912 111 2222
              </a>
              <a dir="ltr" href="tel:02111112222">
                021 1111 2222
              </a>
            </li>
            <li className="ir-r">
              <i className="bx bxs-envelope"></i>
              <span className="ir-b">ایمیل</span>
              <a dir="ltr" href="mailto:hello@example.com">
                hello@example.com
              </a>
              <Link dir="ltr" to="#">
                اسکایپ: @example
              </Link>
            </li>
          </ul>

          <div className="sidebar-follow-us">
            <h3 className="ir-b">ما را در شبکه های مجازی دنبال کنید:</h3>

            <ul className="social-wrap">
              <li>
                <Link to="#">
                  <i className="bx bxl-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="bx bxl-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="bx bxl-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="bx bxl-youtube"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
