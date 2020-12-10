import React, { Component } from "react";
import { Link } from "react-router-dom";

export class FailPayment extends Component {
  state = {};
  componentDidMount() {
    this.setState({ productId: this.props.location.search.substr(11, 24) });
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
              src="/assets/img/x-circle.svg"
              alt="عکس"
            />

            <h3
              style={{ marginTop: "30px" }}
              className="d-block ir-b text-danger text-center"
            >
              پرداخت ناموفق
            </h3>

            {/* <p
              style={{ boxShadow: "2px 2px 20px #00000015", marginTop: "30px" }}
              className="ir-r d-block text-center ir-r p-3 bg-white"
            >
              کد رهگیری: 13115135151531
            </p> */}
          </div>
        </div>
        <div className="row">
          <div className="mx-auto">
            <Link
              to={"/products/" + this.state.productId}
              className="default-btn ir-r mb-0 mr-0 mr-md-1 mr-lg-3 d-block d-md-inline-block"
            >
              بازگشت
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
