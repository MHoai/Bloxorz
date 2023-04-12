import React from "react";
import Footer from "./../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import classNames from "classnames/bind";
import styles from "./HomeLayoutFooter.module.scss";
import HoverPanel from "../../components/HoverPanel/HoverPanel";

const cx = classNames.bind(styles);

const HomeLayoutFooter = ({ showHoverPanel, setShowHoverPanel }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("navbar")}>
        <Navbar showHoverPanel={showHoverPanel} setShowHoverPanel={setShowHoverPanel} />
      </div>
      <div className={cx("hover-container")} style={{display: showHoverPanel ? "flex" : "none"}}>
        <HoverPanel setShowHoverPanel={setShowHoverPanel} />
      </div>
      <div className={cx("wrapper")}>
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
        <div className={cx("footer")}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomeLayoutFooter;
