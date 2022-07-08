/*
 * @Descripttion:
 * @version:
 * @Author: shirley
 * @Date: 2022-07-01 16:20:30
 * @LastEditors: shirley
 * @LastEditTime: 2022-07-08 14:32:30
 */
import React from "react";
import ReactDom from "react-dom";
//组件
import Home from "./home/home.js";
import Login from "./user/login.js";
import Register from "./user/register";

//路由
// import { Routes, Route, Outlet } from "react-router";
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import "antd/dist/antd.css";

import { History, Location } from "history";
import { Action as NavigationType } from "history";

const About = () => {
  return <div>这里是卡拉云的主页</div>;
};

const Dashboard = () => {
  return <div>今日活跃用户: 42</div>;
};

ReactDom.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("app")
);
