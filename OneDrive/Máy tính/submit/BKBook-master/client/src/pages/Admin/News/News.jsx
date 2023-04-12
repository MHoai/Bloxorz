import React from 'react'
import { useState } from "react";

// import boostrap
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import parse from "html-react-parser";
import Tiptap from '../../../components/Editor/Editor';
import Detail from '../../../components/Editor/Detail';

import classNames from "classnames/bind"
import styles from "./News.module.scss"
const cx = classNames.bind(styles)


const News = () => {
  const [description, setDescription] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(description);
  }

  return (
    <>
      <h4 className="fw-bold mb-3">Editor</h4>

      <form className={`rounded px-4 py-3 ${cx("news-form")}`} onSubmit={submitForm}>
        <div className="row mb-3">
          <div className="col-12 mb-2">
            <label htmlFor="news-title" className="col-form-label fs-5 fw-bold">Tiêu đề</label>
            <input type="text" className="form-control" id="news-title" />
          </div>
          <div className="col-12 mb-2">
            <label htmlFor="news-content" className="form-label fs-5 fw-bold">Nội dung</label>
            <Tiptap id="news-content" setDescription={setDescription}/>
          </div>
        </div>
        <button type='submit' className="btn px-4" style={{backgroundColor:"#C00000", color:"white"}}>
            Lưu
        </button>
      </form>
      {/* <Detail description={description} /> */}
    </>
  )
}

export default News