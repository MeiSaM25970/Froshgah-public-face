import React, { Component } from "react";
export class ContactPageTitle extends Component {
  state = {};
  render() {
    return (
      <div className="page-title-area bg-13">
        <div className="container">
          <div className="page-title-content">
            <h2 className="ir-b">تماس با ما</h2>
            <ul>
              <li>
                <a className="ir-r" href="/">
                  خانه
                </a>
              </li>

              <li className="ir-r active">تماس با ما</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
