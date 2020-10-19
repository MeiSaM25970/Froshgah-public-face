import React, { Component } from "react";
export class ProductPageTitle extends Component {
  state = {};
  render() {
    return (
      <div className="page-title-area bg-29">
        <div className="container">
          <div className="page-title-content">
            <h2 className="ir-b">عنوان محصول</h2>
            <ul>
              <li>
                <a className="ir-r" href="خانه">
                  {" "}
                  خانه{" "}
                </a>
              </li>

              <li className="ir-r active">عنوان محصول</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
