import React, { Component } from "react";
import "./loading.css";

class LoadingPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          className="ir-r mx-auto d-block"
          style={{ marginTop: 200, marginBottom: 50 }}
        >
          <h3 className="d-block ir-r mx-auto text-center w-50">
            {" لطفا صبر کنید..."}
          </h3>
          {/* <PleaseWait /> */}
        </div>

        <div
          className="loadingio-spinner-gear-bcw1dmy90l mx-auto"
          style={{
            display: "block",
            marginRight: "auto",
            marginLeft: "auto",
            backgroundColor: "#fff",
            height: 650,
          }}
        >
          <div className="ldio-ytusknw982b mx-auto">
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingPage;
