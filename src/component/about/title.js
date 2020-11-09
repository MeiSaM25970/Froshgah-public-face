import React, { Component } from "react";
import { Link } from "react-router-dom";
export class AboutTitle extends Component {
  state = {};
  render() {
    return (
      <div className="page-title-area bg-29">
        <div className="container">
          <div className="page-title-content">
            <h2 className="ir-b">درباره ما</h2>
            <ul>
              <li>
                <Link className="ir-r" to="/">
                  {" "}
                  خانه{" "}
                </Link>
              </li>

              <li className="ir-r active">درباره ما</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
