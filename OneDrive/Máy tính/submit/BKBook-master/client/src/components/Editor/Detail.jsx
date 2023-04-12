import React from 'react'
import parse from "html-react-parser";

const Detail = ({description}) => {
  return (
    <>
      <div className="ProseMirror">{parse(description)}</div>
    </>
  )
}

export default Detail