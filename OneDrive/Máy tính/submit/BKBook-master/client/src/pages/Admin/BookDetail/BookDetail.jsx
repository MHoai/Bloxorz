import React from 'react'
import { useState } from "react";

// import boostrap
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import parse from "html-react-parser";
import Tiptap from '../../../components/Editor/Editor';

import classNames from "classnames/bind"
import styles from "./BookDetail.module.scss"
const cx = classNames.bind(styles)


const BookDetail = () => {
  const [description, setDescription] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(description);
  }

  return (
    <>
      <h4 className="fw-bold mb-3">Quản lí sách</h4>

      <form className={`rounded px-4 py-3 ${cx("book-form")}`} onSubmit={submitForm}>
        <div className="row mb-3">

          <div className="col-8 mb-2">
            <label htmlFor="book-title" className="col-form-label">Tên sách</label>
            <input type="text" className="form-control" id="book-title" />
          </div>

          <div className="col-4 mb-2">
            <label htmlFor="book-language" class="form-label">Ngôn ngữ</label>
            <select class="form-select" id='book-language'>
              <option value="VN" selected>Tiếng Việt</option>
              <option value="EN">Tiếng Anh</option>
            </select>
          </div>

          <div className="col-5 mb-2">
            <label htmlFor="book-author" className="col-form-label">Tác giả</label>
            <input type="text" className="form-control" id="book-author" />
          </div>

          <div className="col-5 mb-2">
            <label htmlFor="book-publisher" className="col-form-label">Nhà xuất bản</label>
            <input type="text" className="form-control" id="book-publisher" />
          </div>

          <div className="col-2 mb-2">
            <label htmlFor="book-year" className="col-form-label">Năm</label>
            <input type="number" className="form-control" id="book-year" />
          </div>

          <div class="col-3 mb-2">
            <label htmlFor="book-cover" class="form-label">Bìa sách</label>
            <input class="form-control" type="file" id="book-cover" />
          </div>

          <div className="col-3 mb-2">
            <label htmlFor="book-cover-type" class="form-label">Kiểu bìa</label>
            <select class="form-select" id='book-cover-type'>
              <option value="soft" selected>Bìa mềm</option>
              <option value="hard">Bìa cứng</option>
            </select>
          </div>
          
          <div className="col-3 mb-2">
            <label htmlFor="book-price" className="col-form-label">Giá (vnd)</label>
            <input type="number" className="form-control" id="book-price" />
          </div>

          <div className="col-3 mb-2">
            <label htmlFor="book-discount" className="col-form-label">Giảm giả (%)</label>
            <input type="number" className="form-control" id="book-discount" />
          </div>

          <div className="col-12 mb-2">
            <label htmlFor="book-desc" className="form-label">Mô tả</label>
            <Tiptap id="book-desc" setDescription={setDescription}/>
          </div>

        </div>
        <button type='submit' className="btn px-4" style={{backgroundColor:"#C00000", color:"white"}}>
            Lưu
        </button>
      </form>
    </>
  )
}

export default BookDetail