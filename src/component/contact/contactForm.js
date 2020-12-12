import React, { Component } from "react";
import validator from "validator";
import * as userService from "../../service";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export class ContactForm extends Component {
  state = {
    fullName: "",
    email: "",
    message: "",
    fullNameIsEmpty: false,
    emailIsEmpty: false,
    emailTypeErr: false,
    messageIsEmpty: false,
    isValid: false,
    loading: false,
  };

  changeHandler(e) {
    const contact = {};
    const name = e.target.name;
    const value = e.target.value;
    contact[name] = value;
    this.setState({ ...this.state, ...contact });
  }
  async submitHandler(e) {
    await e.preventDefault();
    await this.setState({ loading: true });
    await this.validation();
    if (this.state.isValid) {
      const contact = {
        fullName: this.state.fullName,
        email: this.state.email,
        message: this.state.message,
      };
      userService
        .createContact(contact)
        .then((res) => {
          if (res.status === 200) {
            confirmAlert({
              customUI: ({ onClose }) => {
                return (
                  <div className="custom-ui text-right ">
                    <i className="material-icons-outlined">done</i>

                    <p className="ir-r">پیام شما با موفقیت ارسال شد.</p>

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
        .catch((err) => console.log(err))
        .finally(() => this.setState({ loading: false }));
    }
  }
  validation() {
    const fullNameIsEmpty = validator.isEmpty(this.state.fullName);
    const emailIsEmpty = validator.isEmpty(this.state.email);
    const emailType = validator.isEmail(this.state.email);
    const messageIsEmpty = validator.isEmpty(this.state.message);
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
    if (!fullNameIsEmpty && !emailIsEmpty && emailType && !messageIsEmpty) {
      this.setState({ isValid: true });
    } else this.setState({ isValid: false, loading: false });
  }
  render() {
    return (
      <div className="col-lg-8">
        <div className="contact-wrap ptb-100">
          <div className="contact-form">
            <div className="contact-title">
              <h2 className="ir-b">تماس با ما</h2>
            </div>
            <form id="contactForm" onSubmit={this.submitHandler.bind(this)}>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <label className="ir-r">نام و نام خانوادگی</label>
                    <input
                      type="text"
                      name="fullName"
                      id="name"
                      className="form-control ir-r"
                      onChange={this.changeHandler.bind(this)}
                    />
                    {this.state.fullNameIsEmpty ? (
                      <div className="help-block text-danger with-errors ir-r mt-1">
                        نام و نام خانوادگی الزامیست.
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <label className="ir-r">ایمیل</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control ir-r"
                      onChange={this.changeHandler.bind(this)}
                    />
                    {this.state.emailIsEmpty ? (
                      <div className="help-block text-danger with-errors ir-r mt-1">
                        وارد نمودن ایمیل الزامیست.
                      </div>
                    ) : this.state.emailTypeErr ? (
                      <div className="help-block text-danger with-errors ir-r mt-1">
                        ایمیل شما اشتباه است .
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label className="ir-r">پیام شما</label>
                    <textarea
                      name="message"
                      className="form-control ir-r"
                      id="message"
                      cols="30"
                      rows="10"
                      onChange={this.changeHandler.bind(this)}
                      data-error="Write your message"
                    ></textarea>
                    {this.state.fullNameIsEmpty ? (
                      <div className="help-block text-danger with-errors ir-r mt-1">
                        پیامی برای ما بنویسید.{" "}
                      </div>
                    ) : (
                      ""
                    )}{" "}
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <button
                    type="submit"
                    className="default-btn btn-two ir-r"
                    disabled={this.state.loading}
                  >
                    {this.state.loading ? "لطفاً صبر کنید..." : "ارسال"}
                  </button>
                  <div
                    id="msgSubmit"
                    className="h3 text-center hidden ir-r"
                  ></div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
