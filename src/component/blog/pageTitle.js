import React, { Component } from "react";
export class WeblogsPageTitle extends Component {
  state = {};
  render() {
    return (
      <div className="page-title-area bg-29">
        <div className="container">
          <div className="page-title-content">
            <h2 className="ir-b">مقالات آموزشی</h2>
            <ul>
              <li>
                <a className="ir-r" href="خانه">
                  {" "}
                  خانه{" "}
                </a>
              </li>

              <li className="ir-r active">مقالات آموزشی</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
