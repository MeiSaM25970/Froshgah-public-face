import React, { Component } from "react";
export class ContactForm extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-8">
        <div className="contact-wrap ptb-100">
          <div className="contact-form">
            <div className="contact-title">
              <h2 className="ir-b">تماس با ما</h2>
            </div>
            <form id="contactForm">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="form-group">
                    <label className="ir-r">نام و نام خانوادگی</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control ir-r"
                      required
                    />
                    <div className="help-block with-errors ir-r"></div>
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
                      required
                    />
                    <div className="help-block with-errors ir-r"></div>
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
                      required
                      data-error="Write your message"
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <button type="submit" className="default-btn btn-two ir-r">
                    ارسال
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
