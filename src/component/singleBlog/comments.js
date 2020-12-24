import React, { Component } from "react";
import * as userService from "../../service";
import moment from "moment-jalaali";
export class Comments extends Component {
  state = { comments: [], filtered: [] };
  async componentDidMount() {
    const weblogId = this.props.match.params.id;
    await this.fetchComments(weblogId);
  }

  fetchComments(id) {
    userService
      .filterCommentsByWeblogId(id)
      .then((res) => this.setState({ comments: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    const comments = this.state.comments.filter(
      (comment) => comment.status === "accept"
    );
    return comments.length > 0 ? (
      <div className="comments-wrap">
        <h3 className="ir-b">{`نظرات (${comments.length})`}</h3>

        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <h3 className="ir-b pr-0">{comment.fullName}</h3>
              <span className="ir-r">
                {moment(comment.date, "YYYY/MM/DD").format("jYYYY/jMM/jDD")}
              </span>

              <p className="ir-r">{comment.message}</p>

              {comment.answer ? (
                <div className="comment-answer">
                  <h3 className="ir-b pr-0">
                    {comment.answer.adminInfo.fullName}
                  </h3>
                  <span className="ir-r">
                    {moment(comment.answer.answerDate, "YYYY/MM/DD").format(
                      "jYYYY/jMM/jDD"
                    )}
                  </span>

                  <p className="ir-r">{comment.answer.message}</p>
                </div>
              ) : (
                ""
              )}
            </li>
          ))}
        </ul>
      </div>
    ) : (
      ""
    );
  }
}
