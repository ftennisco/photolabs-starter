import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const ModalPicture = (props) => {
  const { id, location, user, urls } = props.photoData;

  const handlePhotoClick = () => {
    props.onPhotoClick(id);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton toggleFavorite={props.toggleFavorite} favorites={props.favorites} id={id} />
      <img
        src={urls.regular}
        alt={`Photo ${id}`}
        className="photo-details-modal__image"
        onClick={handlePhotoClick}
      />
      <div className="photo-list__user-details">
        <img src={user.profile} alt={`${user.username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span className="username">{user.username}</span>
          <div className="location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPicture;
