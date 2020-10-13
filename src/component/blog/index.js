import React, { Component } from "react";

export class Blog extends Component {
  state = {};
  render() {
    return (
      <section className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="ir-b">وبلاگ</span>
            <h2 className="ir-r">آخرین مقالات آموزشی</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <a href="single-blog.html">
                  <img src="/assets/img/blog-img-1.jpg" alt="Image" />
                </a>

                <div className="news-content">
                  <ul className="admin d-flex justify-content-start mb-3">
                    <li className="float ir-r">
                      <i className="bx bx-calendar-alt"></i>
                      1399/6/15
                    </li>
                  </ul>

                  <a href="single-blog.html">
                    <h3 className="ir-b">
                      یادگیری آنلاین زبان انگلیسی به صورت گام به گام
                    </h3>
                  </a>

                  <a href="single-blog.html" className="read-more ir-r">
                    بیشتر
                    <span className="flaticon-next"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <a href="single-blog.html">
                  <img src="/assets/img/blog-img-2.jpg" alt="Image" />
                </a>

                <div className="news-content">
                  <ul className="admin d-flex justify-content-start mb-3">
                    <li className="float ir-r">
                      <i className="bx bx-calendar-alt"></i>
                      1399/6/15
                    </li>
                  </ul>

                  <a href="single-blog.html">
                    <h3 className="ir-b">
                      یادگیری آنلاین زبان انگلیسی به صورت گام به گام
                    </h3>
                  </a>

                  <a href="single-blog.html" className="read-more ir-r">
                    بیشتر
                    <span className="flaticon-next"></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <a href="single-blog.html">
                  <img src="/assets/img/blog-img-3.jpg" alt="Image" />
                </a>

                <div className="news-content">
                  <ul className="admin d-flex justify-content-start mb-3">
                    <li className="float ir-r">
                      <i className="bx bx-calendar-alt"></i>
                      1399/6/15
                    </li>
                  </ul>

                  <a href="single-blog.html">
                    <h3 className="ir-b">
                      یادگیری آنلاین زبان انگلیسی به صورت گام به گام
                    </h3>
                  </a>

                  <a href="single-blog.html" className="read-more ir-r">
                    بیشتر
                    <span className="flaticon-next"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
