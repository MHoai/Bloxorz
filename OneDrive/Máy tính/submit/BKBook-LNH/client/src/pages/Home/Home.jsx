import React from 'react'

// import boostrap
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCellsLarge, faPlus } from '@fortawesome/free-solid-svg-icons'

// for rating star
import ReactStars from "react-rating-stars-component";

import images from './../../images/index';
import { getPriceExpr } from '../../utils/getPriceRepr';

import './style.css'
import classNames from "classnames/bind"
import styles from "./Home.module.scss"
const cx = classNames.bind(styles)

const Home = () => {
  const bookCategories = [
    {
      category: 'Sách self-help',
      image: images.selfhelpCategory,
    },
    {
      category: 'Sách văn học',
      image: images.novelCategory,
    },
    {
      category: 'Truyện tranh',
      image: images.comicCategory,
    },
    {
      category: 'Sách giáo khoa',
      image: images.textbookCategory,
    },
    {
      category: 'Sách ngoại văn',
      image: images.foreignCategory,
    },
    {
      category: 'Sách kinh tế',
      image: images.economicsCategory,
    }
  ]

  const topTredings = [
    {
      "category": "Sách self-help",
      "top1": {
        "name": "Tâm lý học thuyết phục", 
        "price": 190000, 
        "discount": 23, 
        "image": images.selfhelpTop1, 
        "description": 
          '"Tâm lý học thuyết phục" cung cấp cho bạn phương \
          pháp bán hàng hoàn toàn mới, không chèo kéo, không gây áp lực, \
          giúp bạn có thể bán bất kỳ thứ gì cho bất kỳ ai.',
        "start": 4,
        "commentCount": 35,
        "tagList": ["Bán chạy nhất", "Đánh giá tích cực"]
      },
      "topk": [
        {
          "name": "Sống sao trong thời đại số? - Định hình lại tươnglai của con người, quốc gia, doanh nghiệp", 
          "price": 210000, 
          "discount": 23, 
          "image": images.selfhelpTop2,
          "start": 3,
          "commentCount": 35,
        },
        {
          "name": "Sức Mạnh Của Sự Công Nhận", 
          "price": 76000, 
          "discount": 53, 
          "image": images.selfhelpTop3,
          "start": 0,
          "commentCount": 0,
        },
        {
          "name": "TedBooks - Thay Đổi Nhỏ Phần Thưởng Lớn", 
          "price": 59000, 
          "discount": 55, 
          "image": images.selfhelpTop4,
          "start": 4,
          "commentCount": 69,
        },
        {
          "name": "Đỉnh Xuất Kỳ Nhân", 
          "price": 58000, 
          "discount": 63, 
          "image": images.selfhelpTop5,
          "start": 4,
          "commentCount": 35,
        }
      ],
    },
    {
      "category": "Tiểu thuyết",
      "top1": {
        "name": "Tâm lý học thuyết phục", 
        "price": 190000, 
        "discount": 23, 
        "image": images.selfhelpTop1, 
        "description": 
          '"Tâm lý học thuyết phục" cung cấp cho bạn phương \
          pháp bán hàng hoàn toàn mới, không chèo kéo, không gây áp lực, \
          giúp bạn có thể bán bất kỳ thứ gì cho bất kỳ ai.',
        "start": 4,
        "commentCount": 35,
        "tagList": ["Bán chạy nhất", "Đánh giá tích cực"]
      },
      "topk": [
        {
          "name": "Sức Mạnh Của Sự Công Nhận", 
          "price": 76000, 
          "discount": 53, 
          "image": images.selfhelpTop3,
          "start": 0,
          "commentCount": 0,
        },
        {
          "name": "TedBooks - Thay Đổi Nhỏ Phần Thưởng Lớn", 
          "price": 59000, 
          "discount": 55, 
          "image": images.selfhelpTop4,
          "start": 4,
          "commentCount": 69,
        },
        {
          "name": "Sống sao trong thời đại số? - Định hình lại tươnglai của con người, quốc gia, doanh nghiệp", 
          "price": 210000, 
          "discount": 23, 
          "image": images.selfhelpTop2,
          "start": 3,
          "commentCount": 35,
        },
        {
          "name": "Đỉnh Xuất Kỳ Nhân", 
          "price": 58000, 
          "discount": 63, 
          "image": images.selfhelpTop5,
          "start": 4,
          "commentCount": 35,
        }
      ],
    }
  ]

  return (
    <>
      {/* Carosel */}
      <div id={cx("carosel")} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={images.carousel1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={images.carousel2} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={"#"+cx("carosel")} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={"#"+cx("carosel")} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Book category */}
      <div id={cx("book-category")} className="py-3 px-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="mb-0 fw-bold">
            <FontAwesomeIcon icon={faTableCellsLarge} color="#C00000" size="xl" className="me-2"/> 
            Danh mục sản phẩm
          </h5>
          <div className="btn" style={{backgroundColor:"#C00000", color:"white"}}>
            <FontAwesomeIcon icon={faPlus} color="white" size="lg" className="me-2"/>
            Xem thêm
          </div>
        </div>
        <hr className="mb-3 mt-0 text-secondary"/>
        <div className="row row-cols-6">
          {bookCategories.map((category, index) => (
            <div className="col" key={index}>
              <div className="card category-card">
                <div style={{paddingTop:"100%",position:"relative"}}>
                    <img src={category.image} className="card-img-top"/>
                </div>
                <div className="card-body text-center">
                    <p className="card-text mb-0">{category.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>  
      
      {/* Top trending */}
      <h3 className="fw-bold" style={{marginTop:"30px"}}>Sách nổi bật theo thể loại</h3>

      {topTredings.map((trend, index) => (
        <div className={`py-3 px-4 ${cx("top-treding")}`} key={index}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="mb-0 fw-bold">{trend.category}</h5>
            <div className="btn" style={{backgroundColor:"#C00000", color:"white"}}>
              <FontAwesomeIcon icon={faPlus} color="white" size="lg" className="me-2"/>
              Xem thêm
            </div>
          </div>
          <hr className="mb-3 mt-0 text-secondary"/>
          <div className="row">
            <div className="col">
              <div className="card h-100 border-0">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={trend.top1.image} className="img-fluid rounded-start"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className={`card-title fw-bold ${cx("max-line-2")}`}>{trend.top1.name}</h5>
                      <p className={`mb-2 ${cx("trending-desc", "max-line-3")}`}>{trend.top1.description}</p>
                      <div>
                        <span className="fs-3 fw-bold" style={{color:"#C00000"}}>
                          {getPriceExpr(trend.top1.price * (1 - trend.top1.discount / 100))}
                        </span>
                        <span className="ms-2 badge" style={{backgroundColor:"#C00000", color:"white"}}>
                            -{trend.top1.discount}%
                        </span>
                      </div>
                      <div className="text-secondary fs-5 text-decoration-line-through">{getPriceExpr(trend.top1.price)}</div>
                      <ReactStars count={5} value={trend.top1.start} isHalf={true} activeColor={"#F7B32D"} size={30} edit={false}/>
                      {trend.top1.tagList.map((tag, index) => (
                        <span className={`badge me-2 ${cx("book-tag")}`} key={index}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row row-cols-2 gy-3">
                {trend.topk.map((book, index) => (
                <div className="col">
                  <div className="card h-100 border-0" key={index}>
                    <div className="row g-0 h-100">
                      <div className="col-md-4">  
                        <img src={book.image} className="img-fluid rounded-start"/>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h6 className={`card-title fw-bold ${cx("max-line-2")}`}>{book.name}</h6>
                          <div>
                            <span className="fw-bold" style={{color:"#C00000"}}>
                              {getPriceExpr(book.price * (1 - book.discount / 100))}
                            </span>
                            <span className="ms-2 badge" style={{backgroundColor:"#C00000", color:"white"}}>
                                -{book.discount}%
                            </span>
                          </div>
                          <div className="text-secondary text-decoration-line-through">{getPriceExpr(book.price)}</div>
                          <ReactStars count={5} value={book.start} isHalf={true} activeColor={"#F7B32D"} size={20} edit={false}/>   
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Home