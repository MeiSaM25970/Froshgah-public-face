import React, { Component } from "react";
import { API_ADDRESS_SERVICE } from "../../env";
import Loading from "../loading";
import moment from "moment-jalaali";
import { Link } from "react-router-dom";
export class BlogList extends Component {
  state = { data: [] };

  render() {
    return this.props.data ? (
      <section className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="ir-b">وبلاگ</span>
            {this.props.location.pathname === "/" ? (
              <h2 className="ir-r">آخرین مقالات آموزشی</h2>
            ) : (
              <h2 className="ir-r"> مقالات آموزشی</h2>
            )}
          </div>

          <div className="row">
            {this.props.data.length > 0 ? (
              this.props.data.map((item, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <Link to={`/singleBlog/${item._id}`}>
                    {" "}
                    <div className="single-blog-post">
                      <img src={API_ADDRESS_SERVICE + item.imgPath} alt="عکس" />

                      <div className="news-content">
                        <ul className="admin d-flex justify-content-start mb-3">
                          <li className="float ir-r">
                            <i className="bx bx-calendar-alt"></i>
                            {moment(item.date, "YYYY/MM/DD HH:mm:ss").format(
                              "jYYYY/jMM/jDD"
                            )}
                          </li>
                        </ul>
                        <h3 className="ir-b">{item.title}</h3>
                        <p
                          className="ir-r text-truncate"
                          style={{ width: 250 }}
                        >
                          {item.littleDes}
                        </p>
                        <br />
                        <span className="read-more ir-r">
                          بیشتر
                          <span className="flaticon-next"></span>
                        </span>
                      </div>
                    </div>
                  </Link>{" "}
                </div>
              ))
            ) : (
              <div className="mx-auto mt-5">
                {" "}
                <h3 className="ir-r">مقاله ای یافت نشد.</h3>
              </div>
            )}
          </div>
        </div>
      </section>
    ) : (
      <Loading />
    );
  }
}
