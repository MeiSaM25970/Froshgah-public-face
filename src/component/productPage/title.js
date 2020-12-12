import React, { Component } from "react";
import { Link } from "react-router-dom";
export class ProductPageTitle extends Component {
  state = {};
  render() {
    return this.props.data ? (
      <div className="page-title-area bg-29">
        <div className="container">
          <div className="page-title-content">
            <h2 className="ir-b">{this.props.data.title}</h2>
            <ul>
              <li>
                <Link className="ir-r" to="/">
                  {" "}
                  خانه{" "}
                </Link>
              </li>

              <li className="ir-r active">{this.props.data.title}</li>
            </ul>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  }
}
