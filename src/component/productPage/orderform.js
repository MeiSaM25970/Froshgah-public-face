import React, { Component } from "react";

export class OrderForm extends Component {
  state = {};
  render() {
    return (
      <section id="order" className="order user-area-style ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6 mx-auto">
              <div className="section-title">
                <h2 className="ir-b" style={{ fontSize: "1.2em" }}>
                  همین حالا سفارش دهید!
                </h2>
              </div>

              <div className="contact-form-action">
                <form method="post">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label className="ir-r">نام و نام خانوادگی</label>
                        <input
                          className="form-control ir-r"
                          type="text"
                          name="fullName"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label className="ir-r">شماره تماس</label>
                        <input
                          className="form-control ir-r"
                          type="tel"
                          name="tel"
                        />
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label className="ir-r">استان</label>
                        <input
                          className="form-control ir-r"
                          list="provinceList"
                          type="text"
                          name="province"
                        />
                        <datalist id="provinceList">
                          <option value="مازندران">مازندران</option>
                          <option value="تهران">تهران</option>
                          <option value="قم">قم</option>
                          <option value="مرکزی">مرکزی</option>
                          <option value="خراسان رضوی">خراسان رضوی</option>
                          <option value="اصفهان">اصفهان</option>
                        </datalist>
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <label className="ir-r">شهر</label>
                        <input
                          className="form-control ir-r"
                          list="citiesList"
                          type="text"
                          name="city"
                        />
                        <datalist id="citiesList">
                          <option value="ساری">ساری</option>
                          <option value="بابل">بابل</option>
                          <option value="آمل">آمل</option>
                          <option value="قائمشهر">قائمشهر</option>
                        </datalist>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label className="ir-r">آدرس</label>
                        <textarea
                          className="form-control ir-r"
                          rows="3"
                          placeholder="بلوار، خیابان، کوچه، پلاک..."
                          type="text"
                          id="address"
                          name="address"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label className="ir-r">کد پستی</label>
                        <input
                          className="form-control ir-r"
                          minLength="10"
                          maxLength="10"
                          type="text"
                          name="postCode"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center">
                          <button className="default-btn ir-r" type="submit">
                            ثبت سفارش
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
