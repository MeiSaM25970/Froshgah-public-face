import React, { Component } from "react";
import { Link } from "react-router-dom";
import { API_ADDRESS_SERVICE } from "../../env";
import Loading from "../loading";
import * as userService from "../../service";
export class Introduction extends Component {
  state = {};
  componentDidMount() {
    if (this.props.data) {
      this.setState({ mainDetail: this.props.data[0] });
    }
    this.fetchVideos();
  }
  componentWillReceiveProps(newProps) {
    if (newProps.data) {
      this.setState({ mainDetail: newProps.data[0] });
    }
  }
  fetchVideos() {
    userService
      .fetchVideos()
      .then((res) => this.setState({ videos: res.data }))
      .catch((err) => console.log(err));
  }
  render() {
    return this.state.mainDetail ? (
      <section className="index-intro">
        <div className="container">
          <div className="row d-lg-flex align-items-lg-center">
            <div className="col-md-5 img-holder mb-5 mb-lg-0">
              <img
                className="w-75 d-block mx-auto"
                src={API_ADDRESS_SERVICE + this.state.mainDetail.imgPath}
                alt="وبسایت رسمی رضا رفیعی"
              />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <h1 className="d-block text-right ir-b mb-3">
                {this.state.mainDetail.title}
              </h1>
              <div
                className="ir-r text-justify pl-3 pr-3"
                dangerouslySetInnerHTML={{
                  __html: this.state.mainDetail.description,
                }}
              />
              <div className="mt-5">
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
            <div className="row">
              {this.state.videos &&
                this.state.videos.map((video, index) => (
                  <div className="col-md-10 mx-auto mt-5">
                    <video
                      key={index}
                      src={API_ADDRESS_SERVICE + video.videoPath}
                      controls={true}
                      width="100%"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    ) : (
      <div style={{ marginTop: 150 }} className="container">
        <div className="d-block mx-auto" style={{ width: 77 }}>
          <Loading />
        </div>
      </div>
    );
  }
}
