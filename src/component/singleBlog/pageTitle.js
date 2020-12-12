import React from "react";
import { Link } from "react-router-dom";

export function SingleBlogTitle(props) {
  return (
    <div className="page-title-area bg-13">
      <div className="container">
        <div className="page-title-content">
          <h2 className="ir-b">{props.data.title}</h2>
          <ul>
            <li>
              <Link className="ir-r" to="/">
                خانه
              </Link>
            </li>

            <li>
              <Link className="ir-r" to="/weblogs">
                مقالات آموزشی
              </Link>
            </li>

            <li className="ir-r active">{props.data.title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
