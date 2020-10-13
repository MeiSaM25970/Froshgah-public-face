import React, { Component } from "react";
export class Products extends Component {
  state = {};
  render() {
    return (
      <section
        id="products"
        className="services-area services-area-style-two pt-100 pb-70"
      >
        <div className="container">
          <div className="section-title">
            <span className="ir-b">محصولات</span>
            <h2 className="ir-r text-white">محصولات آموزشی</h2>
          </div>

          <div className="row ">
            <div className="col-lg-5 col-sm-6 mr-auto mt-100">
              <div className="single-services">
                <i className="flaticon-estimate"></i>
                <h3 className="ir-b">محصول 1</h3>
                <p className="ir-r">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز...
                </p>

                <a href="single-services.html" className="read-more ir-r">
                  اطلاعات بیشتر
                  <span className="flaticon-next"></span>
                </a>
              </div>
            </div>

            <div className="col-lg-5 col-sm-6 ml-auto mt-100">
              <div className="single-services">
                <i className="flaticon-home"></i>
                <h3 className="ir-b">محصول 2</h3>
                <p className="ir-r">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز...
                </p>

                <a href="single-services.html" className="read-more ir-r">
                  اطلاعات بیشتر
                  <span className="flaticon-next"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="services-bg">
          <img src="/assets/img/services-bg.jpg" alt="Image" />
        </div>
      </section>
    );
  }
}
