import React, { Component } from "react";
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
          <a href="#">
            <TwitterShareButton
              url={
                PUBLIC_FACE_SERVICE + "singleBlog/" + this.props.match.params.id
              }
            >
              <i className="bx bxl-twitter"></i>
            </TwitterShareButton>
          </a>
        </li>
        <li>
          <a href="#">
            <TelegramShareButton
              url={
                PUBLIC_FACE_SERVICE + "singleBlog/" + this.props.match.params.id
              }
            >
              <i className="bx bxl-telegram"></i>
            </TelegramShareButton>
          </a>
        </li>
        <li>
          <a href="#">
            <FacebookShareButton
              url={
                PUBLIC_FACE_SERVICE + "singleBlog/" + this.props.match.params.id
              }
            >
              <i className="bx bxl-facebook"></i>
            </FacebookShareButton>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <WhatsappShareButton
              url={
                PUBLIC_FACE_SERVICE + "singleBlog/" + this.props.match.params.id
              }
            >
              <i className="bx bxl-whatsapp"></i>
            </WhatsappShareButton>
          </a>
        </li>
      </ul>
    );
  }
}
