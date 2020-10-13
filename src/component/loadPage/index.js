import React, { Component } from "react";

export class LoadPage extends Component {
  state = {};
  render() {
    return (
      <div className="loader-wrapper">
        <div className="loader">
          <div className="dot-wrap">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    );
  }
}
