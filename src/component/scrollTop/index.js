import React, { Component } from "react";

export class ScrollTop extends Component {
  state = {};
  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    return (
      <div className="go-top" onClick={() => this.scrollTop()}>
        <i className="bx bx-chevrons-up" onClick={() => this.scrollTop()}></i>
        <i className="bx bx-chevrons-up" onClick={() => this.scrollTop()}></i>
      </div>
    );
  }
}
