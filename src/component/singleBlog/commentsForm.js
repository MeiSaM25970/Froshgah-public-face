import React, { Component } from "react";
import validator from "validator";
import * as userService from "../../service";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export class CommentsForm extends Component {
  state = {
    fullName: "",
    email: "",
    message: "",
    fullNameIsEmpty: false,
    emailIsEmpty: false,
    emailTypeErr: false,
    messageIsEmpty: false,
    isValid: false,
    weblogId: "",
    loading: false,
  };
  componentDidMount() {
    if (this.props.data._id) {
      this.setState({ weblogId: this.props.data._id });
    }
  }
  componentWillReceiveProps(newProps) {
    if (this.props.data._id !== newProps.data._id) {
      if (this.props.data._id) {
        this.setState({ weblogId: newProps.data._id });
      }
    }
  }
  async submitHandler(e) {
    await e.preventDefault();
    this.setState({ loading: true });
    await this.validation();
    if (this.state.isValid) {
      const comment = {
        fullName: this.state.fullName,
        email: this.state.email,
        message: this.state.message,
        weblogId: this.state.weblogId,
      };
      userService
        .createComment(comment)
        .then((res) => {
          if (res.status === 200) {
            confirmAlert({
              customUI: ({ onClose }) => {
                return (
                  <div className="custom-ui text-right ">
                    <i className="material-icons-outlined">done</i>

                    <p className="ir-r">
                      {" "}
                      نظر شما با موفقیت ارسال شد و پس از تایید مدیریت در سایت
                      نمایش داده می شود.
                    </p>

                    <button
                      className="default-btn btn-two ir-r"
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
        })
        .catch((err) => {
          this.configError();
          console.log(err);
        })
        .finally(() => this.setState({ loading: false }));
    }
  }
  changeHandler(e) {
    const comment = {};
    const name = e.target.name;
    const value = e.target.value;
    comment[name] = value;
    this.setState({ ...this.state, ...comment });
  }
  validation() {
    const fullNameIsEmpty = validator.isEmpty(this.state.fullName);
    const emailIsEmpty = validator.isEmpty(this.state.email);
    const emailType = validator.isEmail(this.state.email);
    const messageIsEmpty = validator.isEmpty(this.state.message);
    const weblogId = validator.isEmpty(this.state.weblogId);
    if (fullNameIsEmpty) {
      this.setState({ fullNameIsEmpty: true, loading: false });
    } else this.setState({ fullNameIsEmpty: false });
    if (emailIsEmpty) {
      this.setState({ emailIsEmpty: true, loading: false });
    } else this.setState({ emailIsEmpty: false });
    if (emailType) {
      this.setState({ emailTypeErr: false });
    } else this.setState({ emailTypeErr: true, loading: false });
    if (messageIsEmpty) {
      this.setState({ messageIsEmpty: true, loading: false });
    } else this.setState({ messageIsEmpty: false });
    if (weblogId) {
      this.setState({ weblogIdErr: true, loading: false });
    } else this.setState({ weblogIdErr: false });
    if (
      !fullNameIsEmpty &&
      !emailIsEmpty &&
      emailType &&
      !messageIsEmpty &&
      !weblogId
    ) {
      this.setState({ isValid: true });
    } else this.setState({ isValid: false, loading: false });
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
    return (
      <div className="leave-reply-wrap">
        <h3 className="ir-b">ارسال نظر</h3>
        <p className="ir-r">
          ایمیل شما در جایی درج نمی‌شود و صرفا برای ثبت نظر شما می‌باشد.*
        </p>

        <form onSubmit={this.submitHandler.bind(this)}>
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="form-group">
                <label className="ir-r">نام و نام خانوادگی*</label>
                <input
                  type="text"
                  name="fullName"
                  id="name"
                  className="form-control ir-r"
                  onChange={this.changeHandler.bind(this)}
                />
                {this.state.fullNameIsEmpty && (
                  <small className="d-block text-danger mt-2 ir-r">
                    نام و نام خانوادگی خود را وارد کنید.
                  </small>
                )}
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="form-group">
                <label className="ir-r">ایمیل*</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="hello@example.com"
                  className="form-control ir-r"
                  onChange={this.changeHandler.bind(this)}
                />
                {this.state.emailIsEmpty ? (
                  <small className="d-block text-danger mt-2 ir-r">
                    ایمیل خود را وارد کنید.
                  </small>
                ) : this.state.emailTypeErr ? (
                  <small className="d-block text-danger mt-2 ir-r">
                    ایمیل شما اشتباه است.
                  </small>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label className="ir-r">نظر شما*</label>
                <textarea
                  name="message"
                  className="form-control ir-r"
                  id="message"
                  rows="8"
                  onChange={this.changeHandler.bind(this)}
                />
                {this.state.messageIsEmpty && (
                  <small className="d-block text-danger mt-2 ir-r">
                    نظری برای ما بنویسید.
                  </small>
                )}
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <button
                type="submit"
                className="default-btn ir-r page-btn"
                disabled={this.state.loading}
              >
                {this.state.loading ? "لطفاً صبر کنید..." : " ثبت نظر"}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
