/*
 * @Descripttion:
 * @version:
 * @Author: shirley
 * @Date: 2022-07-08 16:45:05
 * @LastEditors: shirley
 * @LastEditTime: 2022-07-27 16:26:20
 */
import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
//组件
import Home from "./home/home.js";
import Login from "./user/login.js";
import Register from "./user/register";

import { Breadcrumb, Layout, Menu } from "antd";
const { Header, Content, Sider } = Layout;

const topNav = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
];
const App = () => (
  <BrowserRouter>
    {/* <Routes>{rotuerViews(routerItems)}</Routes> */}
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

const rotuerViews = (routerItems) => {
  if (routerItems && routerItems.length) {
  }
};
export default App;
