import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Aside from "../aside";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Aside />
        <div className="w-full p-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
