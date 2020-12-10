import React, { Component } from "react";
import { API_ADDRESS_SERVICE } from "../../env";
import Loading from "../loading";
import moment from "moment-jalaali";
import { SharePost } from "./sharePost";
import { Comments } from "./comments";
import { CommentsForm } from "./commentsForm";
import { CategoriesForWeblog } from "./categories";

export class SingleBlog extends Component {
  state = { data: { adminInfo: { imgPath: "1" } } };
  componentDidMount() {
    this.setState({ data: this.props.data });
  }
  componentWillReceiveProps(newProps) {
    this.setState({ data: newProps.data });
  }
  render() {
    return this.state.data._id ? (
      <div className="single-blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-blog-content">
                <img
                  src={API_ADDRESS_SERVICE + this.state.data.imgPath}
                  alt="عکس"
                />

                <div className="blog-top-content">
                  <div className="news-content">
                    <ul className="admin">
                      <li>
                        <a className="ir-r" href="#">
                          <img
                            src={
                              this.state.data.adminInfo
                                ? API_ADDRESS_SERVICE +
                                  this.state.data.adminInfo.imgPath
                                : ""
                            }
                            width="50"
                            height="50"
                            alt="عکس"
                            className="ml-2"
                          />
                          {this.state.data.adminInfo
                            ? this.state.data.adminInfo.fullName
                            : ""}
                        </a>
                      </li>

                      <li className="float ir-r">
                        <i className="bx bx-calendar-alt"></i>
                        {moment(
                          this.state.data.date,
                          "YYYY/MM/DD HH:mm:ss"
                        ).format("jYYYY/jMM/jDD")}
                      </li>
                    </ul>

                    <h3 className="ir-b">{this.state.data.title}</h3>

                    <div
                      className="ir-r text-justify"
                      dangerouslySetInnerHTML={{
                        __html: this.state.data.description,
                      }}
                    />
                  </div>
                </div>
                <SharePost {...this.props} />
                <Comments {...this.props} />
                <CommentsForm {...this.props} />
              </div>
            </div>
            <CategoriesForWeblog {...this.props} />
          </div>
        </div>
      </div>
    ) : (
      <Loading />
    );
  }
}
