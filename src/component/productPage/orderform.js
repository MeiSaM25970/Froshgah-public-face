import React, { Component } from "react";
import { InputCity, selectCityStore } from "../inputCity";
import * as userService from "../../service";
import validator from "validator";

export class OrderForm extends Component {
  state = {
    fullName: "",
    tel: "",
    address: "",
    postCode: "",
    area: { area: "", city: "" },
    fullNameErr: false,
    telErr: false,
    addressErr: false,
    postCodeErr: false,
    areaErr: false,
    cityErr: false,
    telTypeErr: false,
  };
  componentDidMount() {
    this.unsubscribe = selectCityStore.subscribe(() => {
      const arrayNumber = selectCityStore.getState().length;
      this.setState({ area: selectCityStore.getState()[arrayNumber - 1] });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  changHandler(e) {
    const order = {};
    const name = e.target.name;
    const value = e.target.value;
    order[name] = value;
    this.setState({ ...this.state, ...order });
  }
  async submitHandler(e) {
    await e.preventDefault();
    await this.validationInput();
    if (
      !this.state.addressErr &&
      !this.state.areaErr &&
      !this.state.cityErr &&
      !this.state.fullNameErr &&
      !this.state.postCodeErr &&
      !this.state.telErr &&
      !this.state.telTypeErr
    ) {
      const orderInfo = {
        fullName: this.state.fullName,
        tel: this.state.tel,
        area: this.state.area.area,
        city: this.state.area.city,
        address: this.state.address,
        postCode: this.state.postCode,
        productId: this.props.data._id,
        productName: this.props.data.title,
        productPrice: this.props.data.price,
      };
      userService
        .checkout(orderInfo)
        .then((res) => window.location.replace(res.data));
    }
  }
  async validationInput() {
    const fullNameEmpty = await validator.isEmpty(this.state.fullName);
    const telEmpty = await validator.isEmpty(this.state.tel);
    const addressEmpty = await validator.isEmpty(this.state.address);
    const postCodeEmpty = await validator.isEmpty(this.state.postCode);
    const areaEmpty = await validator.isEmpty(this.state.area.area);
    const cityEmpty = await validator.isEmpty(this.state.area.city);
    const telType = await validator.isMobilePhone(this.state.tel, "fa-IR");
    if (fullNameEmpty) {
      this.setState({ fullNameErr: true });
    } else this.setState({ fullNameErr: false });
    if (telEmpty) {
      this.setState({ telErr: true });
    } else this.setState({ telErr: false });
    if (telType) {
      this.setState({ telTypeErr: false, telErr: false });
    } else this.setState({ telTypeErr: true });
    if (addressEmpty) {
      this.setState({ addressErr: true });
    } else this.setState({ addressErr: false });
    if (postCodeEmpty) {
      this.setState({ postCodeErr: true });
    } else this.setState({ postCodeErr: false });
    if (areaEmpty) {
      this.setState({ areaErr: true });
    } else this.setState({ areaErr: false });
    if (cityEmpty) {
      this.setState({ cityErr: true });
    } else this.setState({ cityErr: false });
  }
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
                <form method="post" onSubmit={this.submitHandler.bind(this)}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label className="ir-r">نام و نام خانوادگی</label>
                        <input
                          className="form-control ir-r"
                          type="text"
                          name="fullName"
                          onChange={this.changHandler.bind(this)}
                        />
                        {this.state.fullNameErr && (
                          <small className="d-block mx-auto text-danger ir-r mt-2">
                            نام و نام خانوادگی الزامیست.
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label className="ir-r">شماره تماس</label>
                        <input
                          className="form-control ir-r"
                          type="tel"
                          name="tel"
                          onChange={this.changHandler.bind(this)}
                        />
                        {this.state.telErr ? (
                          <small className="d-block mx-auto text-danger ir-r mt-2">
                            شماره تماس الزامیست.
                          </small>
                        ) : this.state.telTypeErr ? (
                          <small className="d-block mx-auto text-danger ir-r mt-2">
                            شماره تماس را صحیح وارد نمایید.
                          </small>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <InputCity />
                    {this.state.areaErr && (
                      <small className="d-block mx-auto text-danger ir-r mt-2">
                        انتخاب استان الزامیست.
                      </small>
                    )}
                    {this.state.cityErr && (
                      <small className="d-block mx-auto text-danger ir-r mt-2">
                        انتخاب شهر الزامیست.
                      </small>
                    )}
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
                          onChange={this.changHandler.bind(this)}
                        ></textarea>
                        {this.state.addressErr && (
                          <small className="d-block mx-auto text-danger ir-r mt-2">
                            وارد نمودن آدرس الزامیست.
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label className="ir-r">کد پستی</label>
                        <input
                          className="form-control ir-r"
                          minLength="10"
                          maxLength="10"
                          type="number"
                          name="postCode"
                          onChange={this.changHandler.bind(this)}
                        />
                        {this.state.postCodeErr && (
                          <small className="d-block mx-auto text-danger ir-r mt-2">
                            وارد نمودن کدپستی الزامیست.
                          </small>
                        )}
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
