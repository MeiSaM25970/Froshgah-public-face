import React, { Component } from "react";
export class AboutComponent extends Component {
  state = {};
  render() {
    return (
      <section className="about-content ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <span className="d-block ir-b text-right">
                {this.props.data.title}
              </span>
              <br />
              <div
                className="d-block ir-r text-justify"
                dangerouslySetInnerHTML={{
                  __html: this.props.data.description,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
