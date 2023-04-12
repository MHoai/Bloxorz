import classNames from "classnames/bind";
import styles from "./Logo.module.scss";
import images from "../../images";

const cx = classNames.bind(styles);

const Logo = () => {
  return (
    <div className={cx("container")}>
      <img className={cx("logo-image")} src={images.logoImage} />
      <div className={cx("logo-name")}>
        BKBOOK
      </div>
    </div>
  )
}

export default Logo