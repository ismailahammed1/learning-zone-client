// @ts-nocheck
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

import Footer from "../component/Pages/Shared/Footer/Footer";

const MainPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
