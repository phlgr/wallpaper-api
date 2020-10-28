import React from "react";
import IconButton from "./IconButton";
import "./ImagePreview.css";

export default function ImagePreview({ src, alt, author, id }) {
  return (
    <div className="imageContainer">
      <IconButton
        onClick={() => {
          localStorage.setItem("favorites", id);
        }}
      >
        💖
      </IconButton>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
