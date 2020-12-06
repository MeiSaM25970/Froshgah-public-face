import React, { Component } from "react";
import PleaseWait from "../loading/pleaseWait";
import * as userService from "../../service";

export class CategoriesPageTitle extends Component {
  state = { category: { title: "" } };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchCategoryById(id);
  }
  fetchCategoryById(id) {
    userService
      .fetchCategoryById(id)
      .then((res) => this.setState({ category: res.data }))
      .catch((err) => console.log(err));
  }
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      const id = newProps.match.params.id;
      this.fetchCategoryById(id);
    }
  }
  render() {
    return this.state.category ? (
      <div className="page-title-area bg-29">
        <div className="container">
          <div className="page-title-content">
            <h2 className="ir-b">مقالات دسته بندی شده</h2>
            <ul>
              <li>
                <a className="ir-r" href="خانه">
                  {" "}
                  خانه{" "}
                </a>
              </li>

              <li className="ir-r active">{`مقالات دسته  ${this.state.category.title} `}</li>
            </ul>
          </div>
        </div>
      </div>
    ) : (
      <PleaseWait />
    );
  }
}
