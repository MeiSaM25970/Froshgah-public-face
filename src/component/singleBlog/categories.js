import React, { Component } from "react";
import { Link } from "react-router-dom";
export class CategoriesForWeblog extends Component {
  state = {};
  render() {
    return (
      <div className="col-lg-4">
        <div className="widget-sidebar">
          <div className="sidebar-widget categories">
            <h3 className="ir-b">دسته بندی ها</h3>

            <ul>
              {this.props.categories ? (
                this.props.categories.map((item, index) => (
                  <li key={index}>
                    <Link className="ir-r" to={`/weblogs/category/${item._id}`}>
                      {item.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li>
                  <a className="ir-r" href="#">
                    دسته ای وجود ندارد{" "}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* <div className="sidebar-widget tags">
            <h3 className="ir-b">تگ ها</h3>

            <ul>
              <li>
                <a className="ir-r" href="#">
                  فرجی
                </a>
              </li>
              <li>
                <a className="ir-r" href="#">
                  رضا
                </a>
              </li>
              <li>
                <a className="ir-r" href="#">
                  Speaking
                </a>
              </li>
              <li>
                <a className="ir-r" href="#">
                  افعال to be
                </a>
              </li>
              <li>
                <a className="ir-r" href="#">
                  مکالمه
                </a>
              </li>
              <li>
                <a className="ir-r" href="#">
                  یادگیری
                </a>
              </li>
              <li>
                <a className="ir-r" href="#">
                  زبان
                </a>
              </li>
            </ul>
          </div>
         */}
        </div>
      </div>
    );
  }
}
