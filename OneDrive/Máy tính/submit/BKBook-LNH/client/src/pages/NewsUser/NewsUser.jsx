import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import images from '../../images/index';
import classNames from "classnames/bind"
import styles from "./NewsUser.module.scss"


const cx = classNames.bind(styles)

const NewsUser = () => {
  const NewsList = [
    {
      image: images.checkoutBook2,
      title: "Signficant reading has a more info number",
      description: "It’s nice to win awards. Last night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.",
      time: "10 November, 2020",
      Comment_count: "5",
      Likes: "23"
    },
    {
      image: images.checkoutBook2,
      title: "Signficant reading has a more info number 2",
      description: "It’s nice to win awards. Last night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.",
      time: "10 November, 2020",
      Comment_count: "5",
      Likes: "24"
    },
    {
      image: images.checkoutBook2,
      title: "Signficant reading has a more info number 3",
      description: "It’s nice to win awards. Last night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.",
      time: "10 November, 2020",
      Comment_count: "5",
      Likes: "25"
    },
    {
      image: images.checkoutBook2,
      title: "Signficant reading has a more info number 4",
      description: "It’s nice to win awards. Last night, the Ueno team in Reykjavík came home from the Icelandic Web Awards.",
      time: "10 November, 2020",
      Comment_count: "5",
      Likes: "26"
    }
  ]
  
  const Catergory = [
    "Kinh dị",
    "vui vẻ",
    "hài hước"
  ]

  return (
    <div className={cx("container")}>
      <div className={cx("NewsGrid")}>
          <div className={cx("mb-5", "bold", "fs-36", "while_background")}> Tin tức </div>
          <div className={cx("flex")}>
            <div className={cx("Search_bar_section", "while_background")}>

      {/* xài boostrap chỗ này */}
      <div class="accordion" id="myAccordion">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button type="button" className="accordion-button collapsed fw-bold fs-4" data-bs-toggle="collapse" data-bs-target="#collapseOne">Tìm kiếm</button>									
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                  <div class="input-group rounded">
                     <input type="search" class="form-control rounded" placeholder="Nhập tên tin tức" aria-label="Search" aria-describedby="search-addon" />
                     <span class="input-group-text border-0 bg-white" id="search-addon">
                        <FontAwesomeIcon icon={faSearch}/>
                     </span>
                  </div>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button type="button" className="accordion-button collapsed fw-bold fs-4" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Thể loại</button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse show" data-bs-parent="#myAccordion">
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    {Catergory.map(aCater => (
                        <li class="list-group-item">{aCater}</li>
                    ))}
                  </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
                <button type="button" className="accordion-button collapsed fw-bold fs-4" data-bs-toggle="collapse" data-bs-target="#collapseThree">Sắp xếp theo</button>                     
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
                <div class="card-body">
                <ul className ="list-group list-group-flush">
                     <li class="list-group-item">Tựa đề</li>
                     <li class="list-group-item">Thời gian</li>
                     <li class="list-group-item">Lượt thích</li>
                  </ul>
                </div>
            </div>
        </div>
    </div>
      {/* Kết thúc đoạn mã sử dụng boostrap */}


            </div>
            <div className={cx("News_content", "while_background")}>
              {NewsList.map(News => (
                        <div className={cx("flex", "mb-5", "while_background")}>
                          <img className={cx("New_image")} src={News.image} alt="" />
                          <div className={cx("New_text", "while_background")}>
                            <div className={cx("bold","fs-40", "mb-1", "while_background")}>{News.title}</div>
                            <div className={cx("mb-3", "while_background")}>{News.description}</div>
                            <div className={cx("flex", "yellow-font", "while_background")}>
                                <div className={cx("mb-1", "New_time", "while_background")}>{News.time}</div>
                                <div className={cx("mb-1", "New_comment_count", "while_background")}>{News.Comment_count} Bình luận</div>
                                <div className={cx("mb-1", "red-font", "while_background")}><FontAwesomeIcon className={cx("while_background")}icon={faHeart}/> Thích ({News.Likes})</div>
                            </div>
                          </div>
                       </div>
                    ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewsUser