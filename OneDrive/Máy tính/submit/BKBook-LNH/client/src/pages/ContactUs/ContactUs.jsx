import React from 'react'
import classNames from "classnames/bind"
import styles from "./ContactUs.module.scss"

const cx = classNames.bind(styles)

const ContactUs = () => {
  return (
    <div className={cx("container")}>
        <div className={cx("location")}></div>
        <div className={cx("content")}>
          <div className={cx("bold", "title", "white_background", "mb-5")}>Liên hệ với chúng tôi</div>
          <div className={cx("white_background", "mb-5")}>
            Chúng tôi sẽ cố gắng trả lời tất cả các câu hỏi các bạn đang thắc mắc về chính sách, chương trình khuyến mãi, thẻ hội viên,...
          </div>
          <div className={cx("white_background", "flex", "mb-15")}>
            <div className={cx("half_box", "white_background")}>
                <div className={cx("bold", "white_background", "mb-5")}>Cơ sở 1</div>
                <p className={cx("white_background")}>Số 268 Lý Thường Kiệt, phường 14, quận 10, TP. Hồ Chí Minh</p>
            </div>
            <div className={cx("half_box", "white_background")}>
                <div className={cx("bold", "white_background", "mb-5")}>Cơ sở 2</div>
                <p className={cx("white_background")}>Khu đô thị Đại học Quốc Gia TP. HCM, TP Thủ Đức, TP. Hồ Chí Minh</p>
            </div>
          </div >
          <div className={cx("bold", "send_request", "white_background", "mb-5")}>Gửi yêu cầu</div>

          <form action="" className={cx("white_background")}>
              <div className={cx("flex", "mb-5", "white_background")}>
                  <div className={cx("half_box", "white_background")}>
                      <label htmlFor="name" className={cx("block", "white_background")}>Tên</label>
                      <input type="text" name="name" className={cx("input", "white_background")}/>
                  </div>
                  <div className={cx("half_box", "white_background")}>
                      <label htmlFor="email" className={cx("block", "white_background")}>Email</label>
                      <input type="text" name="email" className={cx("input", "white_background")}/>
                  </div>
              </div>
              <label htmlFor="TypeSupport" className={cx("block", "white_background")}>Loại yêu cầu</label>

              {/* lệnh boosttrap thực hiện ở đây */}
              <div className={cx("half_box", "white_background", "mb-5")}>
                <select class="form-select" aria-label="Default select example" name="TypeSupport">
                  <option value="1">Về chính sách</option>
                  <option value="2">Về cách thức thanh toán</option>
                  <option value="3">Khác</option>
                </select>
              </div>
              {/* lệnh boosttrap kết thúc ở đây */}

              <label htmlFor="write_content" className={cx("block", "white_background")}>Vui lòng điền chi tiết</label>
              <textarea name="write_content" id="" cols="30" rows="6" className={cx("comment_box", "mb-5")}></textarea>
              <input type="submit" name="submit" value="Gửi yêu cầu" className={cx("submit_button")}/>
          </form>
        </div>
    </div>
  )
}

export default ContactUs