import React from "react";
import Navbar from "./../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./HomeLayout.module.scss";
import HoverPanel from "../../components/HoverPanel/HoverPanel";

const cx = classNames.bind(styles);

const HomeLayout = ({ showHoverPanel, setShowHoverPanel }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("navbar")}>
        <Navbar showHoverPanel={showHoverPanel} setShowHoverPanel={setShowHoverPanel} />
      </div>
      <div className={cx("hover-container")} style={{display: showHoverPanel ? "flex" : "none"}}>
        <HoverPanel setShowHoverPanel={setShowHoverPanel} />
      </div>
      <div className={cx("content")}>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <p>Filler</p>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
