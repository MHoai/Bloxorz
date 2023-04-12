import React from 'react'
import classNames from "classnames/bind"
import styles from "./Login.module.scss"

const cx = classNames.bind(styles)

const Login = () => {
  return (
    <div className={cx("container")}>
      <div className={cx("Login_content")}>

        <div className={cx("method", "flex")}>
          <div className={cx("a_method_grid")}>
            <a className={cx("login_and_register", "spec")} href="">
                Đăng nhập
            </a>
          </div>
          <div className={cx("a_method_grid")}>
            <a className={cx("login_and_register")} href="auth/register">
                Đăng ký
            </a>
          </div>
        </div>

        <form className={cx("Body_form", "center")} action="">
              <div className={cx("form_content")}>
                <label htmlFor="username" className={cx("block","p-2","label")}>Số điện thoại/Email</label>
                <input type="text" name="username" className={cx("block","p-2","input")}/>
                <label htmlFor="password" className={cx("block","p-2","label")}>Mật khẩu</label>
                <input type="text" name="password" className={cx("block","p-2","input")}/>
                <div className={cx("Submit_section")}>
                  <input type="submit" value="Đăng nhập" className={cx("submit_button")}/>
                </div>
              </div>
        </form>
      </div>
    </div>
  )
}

export default Login