import React from "react";

export function ErrorPage2() {
  return (
    <div className="">
      <div
        className=""
        style={{
          background: "url('/assets/img/error/bg6.jpg') no-repeat center",
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div className="d-flex flex-row-fluid flex-column justify-content-end align-items-center text-center text-white pb-40 ir-r text-center d-block">
          <h1
            className="display-1 font-weight-bold ir-r text-center mx-auto "
            style={{
              marginTop: 100,
              fontSize: "35px",
              textShadow: "1px 1px 2px white",
            }}
          >
            خطای اتصال با سرور{" "}
          </h1>
          <span
            className="display-4 font-weight-boldest mb-8 mx-auto mt-30"
            style={{ fontSize: "25px", textShadow: "1px 1px 2px black" }}
          >
            لطفا دوباره امتحان کنید.
          </span>
          <a
            href="/"
            className="mx-auto mt-30"
            style={{
              marginBottom: 200,
              fontSize: "20px",
              textShadow: "1px 1px 2px black",
            }}
          >
            {" "}
            بازگشت به صفحه اصلی
          </a>
        </div>
      </div>
    </div>
  );
}
