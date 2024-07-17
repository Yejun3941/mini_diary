import { Outlet } from "react-router-dom";
import Footer from "./footer";
import NaviBar from "./naviBar";
import SideBar from "./sideBar";

export default function Layout() {
  return (
    // 여기가 레이아웃 틀, <nav />,<footer />
    <>
      <NaviBar></NaviBar>
      <SideBar></SideBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
