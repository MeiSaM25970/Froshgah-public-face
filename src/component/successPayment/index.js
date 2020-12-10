import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SuccessPayment extends Component {
  state = {};
  componentDidMount() {
    this.setState({ trackingCode: this.props.location.search.substr(14, 20) });
    this.setState({ productId: this.props.location.search.substr(45, 24) });
  }

  render() {
    return (
      <section
        style={{
          paddingTop: "200px",
          paddingBottom: "200px",
          marginTop: "100px",
        }}
        className="container"
      >
        <div className="row">
          <div className="col-10 col-lg-5 mx-auto">
            <img
              className="d-block mx-auto"
              width="30%"
              src="/assets/img/check-circle.svg"
              alt="عکس"
            />

            <h3
              style={{ marginTop: "30px" }}
              className="d-block ir-b text-success text-center"
            >
              پرداخت موفق
            </h3>

            <p
              style={{
                boxShadow: "2px 2px 20px #00000015",
                marginTop: "30px",
              }}
              className="ir-r d-block text-center ir-r p-3 bg-white"
            >
              {`  کد رهگیری: ${this.state.trackingCode}`}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="mx-auto">
            <Link
              to="/tracking"
              className="default-btn ir-r mb-0 mr-0 mr-md-1 mr-lg-3 d-block d-md-inline-block"
            >
              پیگیری محصول
            </Link>
            <Link
              to="/"
              className="default-btn ir-r mb-0 mr-0 mr-md-1 mr-lg-3 d-block d-md-inline-block mt-2"
            >
              صفحه اصلی
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
