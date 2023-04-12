import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import classNames from "classnames/bind";
import styles from "./AuthLayout.module.scss";

const cx = classNames.bind(styles);

const AuthLayout = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("navbar")}>
        <Navbar />
      </div>
      <div className={cx("content")}>
        <Outlet />
      </div>
    </div>

  )
}

export default AuthLayout