import React from 'react'
import MemberSidebar from './../../components/MemberSidebar/MemberSidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import classNames from "classnames/bind";
import styles from "./MemberLayout.module.scss";
import HoverPanel from '../../components/HoverPanel/HoverPanel';

const cx = classNames.bind(styles);

const MemberLayout = ({ showHoverPanel, setShowHoverPanel }) => {
  return (
    <div className={cx("container")}>
      <div className={cx("navbar")}>
        <Navbar showHoverPanel={showHoverPanel} setShowHoverPanel={setShowHoverPanel} />
      </div>
      <div className={cx("hover-container")} style={{display: showHoverPanel ? "flex" : "none"}}>
        <HoverPanel setShowHoverPanel={setShowHoverPanel} />
      </div>
      <div className={cx("wrapper")}>
        <div className={cx("sidebar-container")}>
          <div className={cx("sidebar")}>
            <div>Filler</div>
            <div>Filler</div>
            <div>Filler</div>
            <div>Filler</div>
            <div>Filler</div>
            <div>Filler</div>
            <MemberSidebar />
          </div>
        </div>
        <div className={cx("content")}>
          <div>Filler</div>
          <div>Filler</div>
          <div>Filler</div>
          <div>Filler</div>
          <div>Filler</div>
          <div>Filler</div>
          <div>Filler</div>
          <div>Filler</div>
          <div>Filler</div>
          <div>Filler</div>
          <div>Filler</div>
          <div>Filler</div>
          <Outlet />
        </div>
      </div>
    </div>

  )
}

export default MemberLayout