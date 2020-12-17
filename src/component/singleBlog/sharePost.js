import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { PUBLIC_FACE_SERVICE } from "../../env";
export class SharePost extends Component {
  state = {};
  render() {
    return (
      <ul className="social-wrap">
        <li>
          <span className="ir-r">به اشتراک گذاری این پست:</span>
        </li>
        <li>
          <Link to="#">
            <TwitterShareButton
              url={
                PUBLIC_FACE_SERVICE + "singleBlog/" + this.props.match.params.id
              }
            >
              <i className="bx bxl-twitter"></i>
            </TwitterShareButton>
          </Link>
        </li>
        <li>
          <Link to="#">
            <TelegramShareButton
              url={
                PUBLIC_FACE_SERVICE + "singleBlog/" + this.props.match.params.id
              }
            >
              <i className="bx bxl-telegram"></i>
            </TelegramShareButton>
          </Link>
        </li>
        <li>
          <Link to="#">
            <FacebookShareButton
              url={
                PUBLIC_FACE_SERVICE + "singleBlog/" + this.props.match.params.id
              }
            >
              <i className="bx bxl-facebook"></i>
            </FacebookShareButton>
          </Link>
        </li>
        <li>
          <Link to="#" target="_blank">
            <WhatsappShareButton
              url={
                PUBLIC_FACE_SERVICE + "singleBlog/" + this.props.match.params.id
              }
            >
              <i className="bx bxl-whatsapp"></i>
            </WhatsappShareButton>
          </Link>
        </li>
      </ul>
    );
  }
}
