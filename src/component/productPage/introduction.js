import React, { Component } from "react";

export class IntroductionProduct extends Component {
  state = {};
  render() {
    return (
      <section className="index-intro">
        <div className="container">
          <div className="row d-lg-flex align-items-lg-center">
            <div className="col-md-5 img-holder mb-5 mb-lg-0">
              <img
                className="w-75 d-block mx-auto"
                src="assets/img/product-img.jpg"
                alt="وبسایت رسمی رضا فرجی"
              />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <h1 className="d-block text-right ir-b mb-3">
                به وبسایت رسمی رضا فرجی خوش آمدید
              </h1>
              <p className="d-block text-justify ir-r mb-3">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز
              </p>
              <a className="default-btn ml-2 ir-r mb-0" href="#order">
                سفارش این محصول
              </a>
              <a className="primary-btn ir-r mb-0" href="#features">
                اطلاعات بیشتر
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
