import React, { Component } from "react";
import validator from "validator";
import * as userService from "../../service";
import PleaseWait from "../loading/pleaseWait";
import { TrackingReport } from "./trackingReport";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export class Tracking extends Component {
  state = { msg: "", search: "", searchErr: false, loading: false };
  async submitHandler(e) {
    e.preventDefault();
    await this.setState({ loading: true, msg: "" });
    await this.validation();
    if (!this.state.searchErr) {
      userService
        .searchTracking("?trackingCode=" + this.state.search)
        .then((response) => {
          this.setState({ data: response.data, loading: false });
          this.props.history.push(
            `/tracking?trackingCode=${response.data.trackingCode}`
          );
        })
        .catch(async (error) => {
          await this.setState({ loading: false });
          if (error.response.status === 404) {
            this.setState({ msg: "سفارشی با این کد رهگیری پیدا نشد." });
          } else {
            this.configError();
          }
        });
    }
  }
  changeHandler(e) {
    const code = {};
    const name = e.target.name;
    const value = e.target.value;
    code[name] = value;
    this.setState({ ...this.state, ...code });
  }
  validation() {
    const searchEmpty = validator.isEmpty(this.state.search);
    if (searchEmpty) {
      this.setState({ searchErr: true, loading: false });
    } else this.setState({ searchErr: false });
  }
  configError() {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui text-right text-danger">
            <i className="material-icons-outlined text-danger">error</i>

            <p className="ir-r">خطا! لطفاً دوباره امتحان کنید.</p>

            <button
              className="btn btn-danger ir-r"
              onClick={() => {
                onClose();
              }}
            >
              باشه
            </button>
          </div>
        );
      },
    });
  }
  render() {
    return !this.props.location.search ? (
      <section
        style={{
          paddingTop: "200px",
          paddingBottom: "200px",
          marginTop: "100px",
        }}
        className="container ir-r"
      >
        <div className="row">
          <div className="col-10 col-lg-5 mx-auto">
            <h3
              style={{ marginBottom: "30px" }}
              className="d-block ir-b text-center"
            >
              پیگیری سفارش
            </h3>

            <form className="w-100" onSubmit={this.submitHandler.bind(this)}>
              <span className="d-block text-right ir-r mb-3">
                لطفا کد رهگیری خود را وارد کنید:
              </span>
              <div className="search-box d-flex justify-content-between align-items-center">
                <input
                  className="form-control ir-r"
                  name="search"
                  placeholder="جستجو..."
                  type="text"
                  onChange={this.changeHandler.bind(this)}
                />

                <button
                  className="search-btn ir-r text-white  px-3"
                  style={{ height: "50px", background: "#040f28" }}
                  type="submit"
                  disabled={this.state.loading}
                >
                  جستجو
                </button>
              </div>
              {this.state.searchErr && (
                <small className="text-danger d-block mt-3">
                  وارد کردن کد رهگیری اجباری است.
                </small>
              )}
            </form>

            {(this.state.msg || this.state.loading) && (
              <div
                style={{
                  boxShadow: "2px 2px 20px #00000015",
                  marginTop: "30px",
                }}
                className="ir-r d-block text-center ir-r p-3 bg-white"
              >
                {this.state.msg ? this.state.msg : <PleaseWait />}
              </div>
            )}
          </div>
        </div>
      </section>
    ) : (
      <TrackingReport
        {...this.props}
        trackingCode={this.state.search}
        data={this.state.data}
      />
    );
  }
}
