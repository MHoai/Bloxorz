import classNames from "classnames/bind";
import styles from "./HoverPanel.module.scss";

const cx = classNames.bind(styles);

const HoverPanel = ({ setShowHoverPanel }) => {

  const categories = [
    {
      category: "Văn Học",
      tags: ["Tiểu Thuyết", "Truyện Ngắn - Tản Văn", "Light Novel", "Ngôn Tình"]
    },
    {
      category: "Kinh Tế",
      tags: ["Bài Học Kinh Doanh", "Quản Trị - Lãnh Đạo", "Marketing - Bán Hàng", "Phân Tích Kinh Tế"]
    },
    {
      category: "Tâm Lý - Kỹ Năng Sống",
      tags: ["Kỹ Năng Sống", "Rèn Luyện Nhân Cách", "Tâm Lý", "Sách Cho Tuổi Mới Lớn"]
    },
    {
      category: "Sách Thiếu Nhi",
      tags: ["Manga - Comic", "Kiến Thức Bách Khoa", "Sách Tranh Kỹ Năng Sống", "Vừa Học Vừa Chơi"]
    },
    {
      category: "Giáo Khoa - Tham Khảo",
      tags: ["Sách Giáo Khoa", "Sách Tham Khảo", "Luyện Thi THPT Quốc Gia", "Mẫu Giáo"]
    },
    {
      category: "Sách Học Ngoại Ngữ",
      tags: ["Tiếng Anh", "Tiếng Nhật", "Tiếng Hoa", "Tiếng Hàn"]
    },
  ]
  
  return (
    <div className={cx("container")} onMouseEnter={
      () => {
        setShowHoverPanel(true)
      }
    } onMouseLeave={() => {
        setShowHoverPanel(false)
      }}>
      {categories.map((category, index) => (
        <div className={cx(`category-container-${index + 1}`)} key={category.category}>
          <p className={cx("category")}>{category.category.toUpperCase()}</p>
          {category.tags.map((tag, tagIndex) => (
            <p className={cx("tag")} key={`tag-${tagIndex}`}>{tag}</p>
          ))}
          <h6 className={cx("view-more-category")}>Xem tất cả</h6>
        </div>
      ))}
    </div>
  )
}

export default HoverPanel