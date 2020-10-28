import React from "react";
import IconButton from "./IconButton";
import "./ImagePreview.css";

export default function ImagePreview({ src, alt, author, id }) {
  return (
    <div className="imageContainer">
      <IconButton
        onClick={() => {
          let favorites = null;
          try {
            favorites = JSON.parse(localStorage.getItem("favorites"));
          } catch (error) {
            // Parsing JSON might fail if local storage is empty
            console.error(error);
            favorites = [];
          }
          const newFavorites = [...favorites, id];
          localStorage.setItem("favorites", JSON.stringify(newFavorites));
        }}
      >
        💖
      </IconButton>
      <img className="imageThumb" src={src} alt={alt} />
      <p className="imageAuthor">Author: {author}</p>
    </div>
  );
}
