import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoadingPage from "../../pages/Loading";
import * as userService from "../../service";
import moment from "moment-jalaali";

export class TrackingReport extends Component {
  state = { orderStatus: "", cancelOrderDes: false, trackingPost: false };
  componentDidMount() {
    if (!this.props.data) {
      const trackingCode = this.props.location.search;
      userService.searchTracking(trackingCode).then((res) => {
        this.setState({ data: res.data });
        this.orderStatus(res.data);
        console.log(res.data.status);
      });
    } else {
      this.setState({ data: this.props.data });
      this.orderStatus(this.props.data);
      console.log(this.props.data.status);
    }
  }
  orderStatus(data) {
    switch (data.status) {
      case "new":
        return this.setState({ orderStatus: "سفارش شما در حال بررسی است." });
      case "orderConfirmation":
        return this.setState({
          orderStatus: "سفارش شما توسط مدیریت تایید شده است .",
        });
      case "orderCancel":
        return this.setState({
          orderStatus: "سفارش شما لغو شده است.",
          cancelOrderDes: true,
        });
      case "productPreparation":
        return this.setState({
          orderStatus: " سفارش شما درحال آماده سازی می باشد .",
        });
      case "deliveryToThePost":
        return this.setState({
          orderStatus: "سفارش شما به اداره پست تحویل داده شده است .",
          trackingPost: true,
        });
      case "deliveryToCustomer":
        return this.setState({
          orderStatus: "سفارش به شما تحویل داده شده است.",
        });
    }
  }
  render() {
    return this.state.data ? (
      <div
        className="content container text-right ir-r"
        style={{
          paddingTop: "75px",
          paddingBottom: "200px",
          marginTop: "140px",
        }}
      >
        <div className="col-md-12 ir-r">
          <div className="card ">
            <div className="card-header card-header-rose card-header-text">
              <div className="card-text">
                <h4 className="card-title ir-r">جزئیات سفارش </h4>
              </div>
            </div>
            <div className="card-body ">
              <form
                method="get"
                action="/"
                className="form-horizontal"
                // onSubmit={this.submitHandler.bind(this)}
              >
                <div className="row">
                  <label className="col-sm-3 col-form-label ir-r text-right">
                    نام و نام خانوادگی:
                  </label>
                  <div className="col-sm-8">
                    <div className="form-group bmd-form-group">
                      <span className="ir-r">{this.state.data.fullName}</span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <label className="col-sm-3 col-form-label ir-r text-right">
                    شماره تماس:
                  </label>
                  <div className="col-sm-8">
                    <div className="form-group bmd-form-group">
                      <span className="ir-r">{this.state.data.mobile}</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <label className="col-sm-3 col-form-label ir-r order-detail-text-right">
                    محصول خریداری شده:
                  </label>
                  <div className="col-sm-8">
                    <div className="form-group bmd-form-group">
                      <span className="ir-r">
                        {this.state.data.productName}
                      </span>

                      {/* <span className="bmd-help">
                        A block of help text that breaks onto a new line.
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <label className="col-sm-3 col-form-label ir-r order-detail-text-right">
                    قیمت:
                  </label>
                  <div className="col-sm-8">
                    <div className="form-group bmd-form-group">
                      <span className="ir-r">{this.state.data.price}</span>

                      {/* <span className="bmd-help">
                        A block of help text that breaks onto a new line.
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <label className="col-sm-3 col-form-label ir-r text-right">
                    تاریخ ثبت:
                  </label>
                  <div className="col-sm-8">
                    <div className="form-group bmd-form-group">
                      <span className="ir-r">
                        {moment(
                          this.state.data.date,
                          "YYYY/MM/DD HH:mm:ss"
                        ).format("jYYYY/jM/jD ساعت: HH:mm:ss")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <label className="col-sm-3 col-form-label ir-r text-right">
                    کد رهگیری:
                  </label>
                  <div className="col-sm-8">
                    <div className="form-group bmd-form-group">
                      <span className="ir-r">
                        {this.state.data.trackingCode}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <label className="col-sm-3 col-form-label ir-r text-right">
                    آدرس:
                  </label>
                  <div className="col-sm-8 ir-r">
                    {" "}
                    <span className="ir-r">
                      {this.state.data.area}
                      {"  -  "}
                    </span>
                    <span className="ir-r">
                      {this.state.data.city + "  "}
                      {"  -  "}
                    </span>
                    <div>
                      <div className="form-group bmd-form-group">
                        <span className="ir-r">{this.state.data.address}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <label className="col-sm-3 col-form-label ir-r text-right">
                    کدپستی:
                  </label>
                  <div className="col-sm-8 ">
                    <div className="form-group bmd-form-group">
                      <span className="ir-r">{this.state.data.postCode}</span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <label className="col-sm-3 col-form-label ir-r text-right">
                    وضعیت سفارش:
                  </label>
                  <div className="col-sm-8 ">
                    <div className="form-group bmd-form-group">
                      <span className="form-control ir-r">
                        {this.state.orderStatus}
                      </span>
                    </div>
                  </div>
                </div>
                {this.state.cancelOrderDes ? (
                  <div className="row">
                    <label className="col-sm-3 col-form-label ir-r text-right">
                      علت لغو سفارش:
                    </label>
                    <div className="col-sm-8 ">
                      <div className="form-group bmd-form-group">
                        <span className="ir-r">
                          {this.state.data.cancelOrderDes
                            ? this.state.data.cancelOrderDes
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : this.state.trackingPost ? (
                  <div className="row">
                    <label className="col-sm-3 col-form-label ir-r text-right">
                      کد رهگیری پست:
                    </label>
                    <div className="col-sm-8 ">
                      <div className="form-group bmd-form-group">
                        <span className="ir-r">
                          {this.state.data.trackingPost
                            ? this.state.data.trackingPost
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="row mt-5 mb-4">
                  <div className="col-sm-6 mx-auto ir-r">
                    <Link to="/" className="btn btn-info ir-r">
                      صفحه اصلی
                    </Link>
                    <Link className="btn btn-muted mr-3 ir-r" to="/tracking">
                      بازگشت
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <LoadingPage />
    );
  }
}
