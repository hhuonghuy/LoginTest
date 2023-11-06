import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Bạn đã thành công!
      </h1>{" "}
      {/* <Link to="/">
                <button type="button" className="btn btn-success" style={{marginLeft: 00}}>
                  Vào trang chủ
                </button>
              </Link>  */}{" "}
      <div className="spinner-border" role="status">
        <span className="visually-hidden"> Loading... </span>{" "}
      </div>
    </div>
  );
}

export default Success;
