import React from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";

function Protected() {
  const url = useParams();
  //   console.log(url);
  //   if (url) {
  //  return <Outlet />;
  //   } else {
  //   }
  return (
    <div>
      {/* <Navigate to={"/counter"} /> */}
      <Outlet />
      <h1>Salom</h1>
    </div>
  );
}

export default Protected;
