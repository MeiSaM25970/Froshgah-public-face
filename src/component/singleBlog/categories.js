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
                  <Link className="ir-r" to="#">
                    دسته ای وجود ندارد{" "}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
