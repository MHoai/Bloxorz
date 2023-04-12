import React, { useEffect, useState } from 'react'
import images from '../../images/index';
import classNames from "classnames/bind"
import styles from "./ProductsDetail.module.scss"
import StarRating from '../../components/StarRating/StarRating';
import ReadMore from '../../components/ReadMore/ReadMore';
import ReactStars from "react-rating-stars-component";
import { faL } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

const ProductsDetail = () => {

  const BookList = [
    {
      name: "Chainsaw Man - Tập 8 - Tặng kèm lót ly",
      image: images.checkoutBook2,
      nxb: "Trẻ",
      author: "Tatsuki Fujimoto",
      book_cover: "Bìa mềm",
      price: "45.000",
      rating: "5",
      id: "8934974185147",
      publish_Year: "2023",
      language: "Tiếng Việt",
      description: "Câu chuyện của Chainsaw Man mô tả một thế giới nơi ma quỷ và con người cùng tồn tại trên Trái đất, và trong đó con người có thể lập hiệp ước để đạt được sức mạnh của quỷ. Nhân vật chính là Denji, để hoàn trả số nợ khổng lồ của cha để lại, Denji cùng con quỷ nhỏ Pochita làm tất cả mọi công việc để có thể hoàn nợ. Sau một tai nạn, Denji bị giết, Pochita đã hòa làm một với Denji, giúp cậu hồi sinh và kết thúc văn bản"
    },
    {
      name: "Chainsaw Man - Tập 9 - Tặng kèm lót ly",
      image: images.checkoutBook1,
      nxb: "Trẻ",
      author: "Tatsuki Fujimoto",
      book_cover: "Bìa mềm",
      price: "50.000",
      rating: "4",
    },
    {
      name: "Chainsaw Man - Tập 10 - Tặng kèm lót ly",
      image: images.checkoutBook2,
      nxb: "Trẻ",
      author: "Tatsuki Fujimoto",
      book_cover: "Bìa mềm",
      price: "65.000",
      rating: "3",
    },
    {
      name: "Chainsaw Man - Tập 11 - Tặng kèm lót ly",
      image: images.checkoutBook1,
      nxb: "Trẻ",
      author: "Tatsuki Fujimoto",
      book_cover: "Bìa mềm",
      price: "75.000",
      rating: "2",
    },
    {
      name: "Chainsaw Man - Tập 12 - Tặng kèm lót ly",
      image: images.checkoutBook2,
      nxb: "Trẻ",
      author: "Tatsuki Fujimoto",
      book_cover: "Bìa mềm",
      price: "15.000",
      rating: "1",
    },
  ]

    const Comments = [
      {
        title: "Amazing Story! You will LOVE it",
        rating: "5",
        content: "Such an incredibly complex story! I had to buy it because there was a waiting list of 30+ at the local library for this book. Thrilled that I made the purchase",
        time: "Staci, February 22, 2020"
      },
      {
        title: "Amazing Story! You will LOVE it",
        rating: "4",
        content: "Such an incredibly complex story! I had to buy it because there was a waiting list of 30+ at the local library for this book. Thrilled that I made the purchase",
        time: "Staci, February 22, 2020"
      },
      {
        title: "Amazing Story! You will LOVE it",
        rating: "3",
        content: "Such an incredibly complex story! I had to buy it because there was a waiting list of 30+ at the local library for this book. Thrilled that I made the purchase",
        time: "Staci, February 22, 2020"
      },
      {
        title: "Amazing Story! You will LOVE it",
        rating: "1",
        content: "Such an incredibly complex story! I had to buy it because there was a waiting list of 30+ at the local library for this book. Thrilled that I made the purchase",
        time: "Staci, February 22, 2020"
      },
      {
        title: "Amazing Story! You will LOVE it",
        rating: "1",
        content: "Such an incredibly complex story! I had to buy it because there was a waiting list of 30+ at the local library for this book. Thrilled that I made the purchase",
        time: "Staci, February 22, 2020"
      }
    ]

  const [quantity, setQuantity] = useState(0)
  const [rating_product, setRating] = useState(0)
  

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prevCount => prevCount - 1);
    }
  }

  const handleIncrement = () => {
    setQuantity(prevCount => prevCount + 1);
  }

  const handleRatingChange = (value) => {
    setRating(value)
  }
  
  var star_1 = 0
  var star_2 = 0
  var star_3 = 0
  var star_4 = 0
  var star_5 = 0
  
  for (let i = 0; i < Comments.length; i++) {
    if (Comments[i].rating === '1') star_1++;
    if (Comments[i].rating === '2') star_2++;
    if (Comments[i].rating === '3') star_3++;
    if (Comments[i].rating === '4') star_4++;
    if (Comments[i].rating === '5') star_5++;
  }

  var aver_star = (star_1*1 + star_2*2 + star_3*3 + star_4*4 + star_5*5)/Comments.length

  star_1 = star_1 / Comments.length * 100
  star_2 = star_2 / Comments.length * 100
  star_3 = star_3 / Comments.length * 100
  star_4 = star_4 / Comments.length * 100
  star_5 = star_5 / Comments.length * 100
  
  


  return (
    <div className={cx("container")}>
        <div className={cx("product")}>
            <div className={cx("flex")}>
              <div className={cx("while_background", "left_side_product_detail")}>
                <img src={BookList[0].image} alt="" className={cx("product_picture")}/>
              </div>
              <div className={cx("while_background", "right_side_product_detail")}>
                <div className={cx("bold", "while_background", "product_detail_info")}>{BookList[0].name}</div>
                <div className={cx("while_background", "product_detail_info")}>Nhà xuất bản: <span className={cx("bold")}>{BookList[0].nxb}</span></div> 
                <div className={cx("while_background", "product_detail_info")}>Tác giả: <span className={cx("bold")}>{BookList[0].author}</span></div>
                <div className={cx("while_background", "product_detail_info")}>Hình thức bìa: <span className={cx("bold")}>{BookList[0].book_cover}</span></div> 
                <div className={cx('price_section', "while_background", "product_detail_info")}>{BookList[0].price} đ</div>
                <div className={cx("flex", "while_background", "product_detail_info_amount")}>
                  <div className={cx("while_background")}>Số lượng: </div>
                  <div className={cx("quantity_button")}>
                    <button type='button' onClick={handleDecrement} className={cx('minus_plus_button')}>-</button>
                    <div className={cx("quantity_text", "while_background")}>{quantity}</div>
                    <button type='button' onClick={handleIncrement} className={cx('minus_plus_button')}>+</button>
                  </div>
                </div>
                <button className={cx("add_wishlist_button")}>Thêm vào Wishlist</button>
              </div>
            </div>

            <div className={cx("while_background", "buy_cart_section")}>
              <div className={cx("while_background", "buy_section")}>
                <button className={cx("add_wishlist_button")}>Thêm vào giỏ hàng</button>
              </div>
              <div className={cx("while_background", "cart_section")}>
                <button className={cx("buy_now_button")}>Mua ngay</button>
              </div>
            </div>
        </div>

        <div className={cx("relatable_product_area")}>
            <div className={cx("bold", "while_background", "title_rp")}>Sản phẩm liên quan</div>
            <div className={cx("while_background", "flex", "ar_product_grid")}>
                {BookList.map((book, index) => ( //khong biet phai xu li index lam sao ?
                  <div className={cx("while_background", "ar_product")}>
                      <div className={cx("ar_product_area")}>
                        <img src={book.image} alt="" className={cx("ar_product_image")}/>
                      </div>
                      <div className={cx("ar_product_area")}>
                        <div className={cx("bold", "while_background", "name_ar_product")}>{book.name}</div>  
                      </div>
                      <div className={cx("ar_product_area")}>
                        <div className={cx("price_section", "while_background")}>{book.price} đ</div>  
                      </div>
                      <div className={cx("ar_product_area")}>
                          <ReactStars count={5} value={book.rating} isHalf={false} activeColor={"#F7B32D"} size={40} edit={false}/>
                      </div>
                  </div>
                ))}
                
            </div>
            <div className={cx("while_background", "Xem_them_grid")}>
              <button className={cx("Xem_them_button")}>Xem Thêm</button>
            </div>
        </div>

        <div className={cx("spec_info")}>
          <div className={cx("bold", "while_background", "title_rp")}>Thông tin sản phẩm</div>
          <table className={cx("while_background", "spec_product_table")}>
              <tr>
                <td>Mã hàng</td>
                <td>{BookList[0].id}</td>
              </tr>
              <tr>
                <td>NXB</td>
                <td>{BookList[0].nxb}</td>
              </tr>
              <tr>
                <td>Tác giả</td>
                <td>{BookList[0].author}</td>
              </tr>
              <tr>
                <td>Năm sản xuất</td>
                <td>{BookList[0].publish_Year}</td>
              </tr>
              <tr>
                <td>Ngôn ngữ</td>
                <td>{BookList[0].language}</td>
              </tr>
              <tr>
                <td>Nội dung: </td>
              </tr>
          </table>
            <div className={cx("spec_descrip")}>
                <ReadMore>{BookList[0].description}</ReadMore>
            </div>
        </div>



        <div className={cx("spec_evaluate")}>
          <div className={cx("bold", "while_background", "title_rp")}>Đánh giá sản phẩm</div>
          <div className={cx("Start_rating", "rating_grid")}>
            <div className={cx("while_background", "evaluate_product")}> 
                  <div>
                    <div className={cx("while_background", "start_rating_number")}>
                      {aver_star}/ <span className={cx("while_background","static_number_star_rating")}>5</span>
                    </div>
                    <div className={cx("while_background", "Start_rating")}>
                      <ReactStars count={5} value={aver_star} isHalf={true} activeColor={"#F7B32D"} size={50} edit={false} onChange={handleRatingChange}/>
                    </div>
                  </div>
            </div>
          
            <div className={cx("while_background", "progress_bar_grid")}>
              <div className={cx("progress_bar_grid_child")}>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{width: `${star_1}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{width: `${star_2}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{width: `${star_3}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{width: `${star_4}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div class="progress mb-3">
                    <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{width: `${star_5}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
              </div>
            </div> 
          </div>
          {Comments.map((acomment, index) => (
              <div className={cx("while_background")} key={index}>
              <div className={cx("while_background", "comment_grid")}>
                    <div className={cx("while_background", "flex", "title_comment_box")}>
                      <div className={cx("while_background", "comment_title")}> {acomment.title}</div>
                      <div className={cx("while_background")}>
                        <ReactStars count={5} value={acomment.rating} isHalf={true} activeColor={"#F7B32D"} size={30} edit={false}/>
                      </div>
                    </div>
                    <div className={cx("while_background", "comment_content")}> {acomment.content}</div>
                    <div className={cx("while_background", "comment_time")}> {acomment.time}</div>
              </div>
            </div>
          ))}

          <div className={cx("while_background", "Start_rating")}>
            <hr />
          </div>
          <div className={cx("bold", "while_background", "title_rp")}>Viết bình luận</div>
          <form name="comment_form"action="" className={cx("while_background")}>
            <div className={cx("while_background", "flex", "rating_product_box")}>
                      <div className={cx("while_background", "write_comment_rating")}> Bạn đánh giá sản phẩm như thế nào ?</div>
                      <div className={cx("while_background")}> 
                        <ReactStars count={5} value={0} isHalf={false} activeColor={"#F7B32D"} size={50} edit={true}/>
                      </div>
            </div>
            <label htmlFor="write_comment_content" className={cx("label_wcc", "while_background")}>Hãy cho những người mua khác biết cảm nhận của bạn về sản phẩm</label>
            <textarea name="write_comment_content" id="" cols="30" rows="15" className={cx("comment_box")}></textarea>
            <label htmlFor="write_comment_content" className={cx("label_wcc", "while_background")}>Thêm tiêu đề cho bài viết</label>
            <textarea name="write_comment_content" id="" cols="30" rows="1" className={cx("comment_box")}></textarea>
            <div className={cx("submit_grid", "while_background")}>
              <input type="submit" name="submit" value="Bình luận" className={cx("submit_button")}/>
            </div>
          </form>

        </div>

    </div>
  )
}

export default ProductsDetail