import React, { Component } from "react";
export class AboutTitle extends Component {
  state = {};
  render() {
    return (
      <div class="page-title-area bg-29">
        <div class="container">
          <div class="page-title-content">
            <h2 class="ir-b">درباره ما</h2>
            <ul>
              <li>
                <a class="ir-r" href="/">
                  {" "}
                  خانه{" "}
                </a>
              </li>

              <li class="ir-r active">درباره ما</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
