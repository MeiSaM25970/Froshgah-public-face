import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_ADDRESS_SERVICE } from "../../env";
import PleaseWait from "../loading/pleaseWait";

export class Introduction extends Component {
  state = {};

  render() {
    const about = this.props.data[0];
    return about ? (
      <section className="index-intro">
        <div className="container">
          <div className="row d-lg-flex align-items-lg-center">
            <div className="col-md-5 img-holder mb-5 mb-lg-0">
              <img
                className="w-75 d-block mx-auto"
                src={API_ADDRESS_SERVICE + about.imgPath}
                alt="وبسایت رسمی رضا رفیعی"
              />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <h1 className="d-block text-right ir-b mb-3">
                به وبسایت رسمی رضا فرجی خوش آمدید.
              </h1>
              <p className="d-block text-justify ir-r mb-3">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز
              </p>
              <a
                className="default-btn ir-r mb-3 mb-md-0 d-block d-md-inline-block"
                href="#products"
              >
                مشاهده دوره ها
              </a>
              <Link
                to="/weblogs"
                className="default-btn ir-r mb-0 mr-0 mr-md-1 mr-lg-3 d-block d-md-inline-block"
              >
                مشاهده مقالات آموزشی
              </Link>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <div style={{ marginTop: 150 }} className="container">
        <div className="d-block mx-auto" style={{ width: 77 }}>
          <PleaseWait />
        </div>
      </div>
    );
  }
}
