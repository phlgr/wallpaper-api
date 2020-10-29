import "./FavoriteImageList.css";
import FavoriteImage from "./FavoriteImage";

export default function FavoriteImageList({ photoIds }) {
  return (
    <div className="image-list">
      {photoIds.map((photoId) => (
        <FavoriteImage key={photoId} photoId={photoId} />
      ))}
    </div>
  );
}
