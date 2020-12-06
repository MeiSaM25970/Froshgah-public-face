import React from "react";

export function SingleBlogTitle(props) {
  return (
    <div className="page-title-area bg-13">
      <div className="container">
        <div className="page-title-content">
          <h2 className="ir-b">{props.data.title}</h2>
          <ul>
            <li>
              <a className="ir-r" href="/">
                خانه
              </a>
            </li>

            <li>
              <a className="ir-r" href="/blog">
                وبلاگ
              </a>
            </li>

            <li className="ir-r active">{props.data.title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
