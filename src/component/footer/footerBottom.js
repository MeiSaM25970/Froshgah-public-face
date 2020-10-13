import React, { Component } from "react";
export class FooterBottom extends Component {
  state = {};
  render() {
    return (
      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <p className="d-block text-center ir-r">
                طراحی شده توسط{" "}
                <a href="https://tad-group.ir/" target="blank">
                  گروه تاد
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
