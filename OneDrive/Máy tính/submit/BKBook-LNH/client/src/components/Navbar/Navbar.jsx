import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faCartShopping, faChevronDown, faMagnifyingGlass, faUserAlt } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const navIcons = [
  {
    text: "Thông báo",
    icon: faBell
  },
  {
    text: "Giỏ hàng",
    icon: faCartShopping
  },
  {
    text: "Tài khoản",
    icon: faUserAlt
  },
]

const Navbar = ({ showHoverPanel, setShowHoverPanel }) => {

  return (
    <div className={cx("container")} style={{borderBottom: showHoverPanel ? "1px solid #f0f0f0" : "none"}}>
      <div className={cx("left")}>
        <Logo />
      </div>
      <div className={cx("middle")}>
        <div className={cx("middle-content")}>
          <div className={cx("hover-icon-container")} onMouseEnter={
            () => {
              setShowHoverPanel(true)
            }
          } onMouseLeave={() => {
              setShowHoverPanel(false)
            }}>
            <FontAwesomeIcon icon={faBars} size="3x" color="#c00000" />
            <FontAwesomeIcon icon={faChevronDown} size="xl" color="#c00000" />
          </div>
          <form className={cx("search-form")}>
            <input type="text" className={cx("search-input")} placeholder="Tìm kiếm" />
            <button className={cx("search-button")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color="white" />
            </button>
          </form>
        </div>
      </div>
      <div className={cx("right")}>
        {navIcons.map((icon, index) => (
          <div className={cx("nav-icon-container")} key={`${icon.text}-${index}`}>
            <FontAwesomeIcon icon={icon.icon} color="#c00000" size="2x" />
            <p className={cx("nav-icon-text")}>{icon.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navbar