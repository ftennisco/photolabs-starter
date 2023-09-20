import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

const HomeRoute = ({ openModal, setSelectedPhoto, favorites, toggleFavorite }) => {

  const [isLiked, setIsLiked] = useState(false);


  const handlePhotoClick = (photoId) => {
    setSelectedPhoto(photos.find((photo) => photo.id === photoId));
    openModal();
  }

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites} />
      <PhotoList photos={photos} toggleFavorite={toggleFavorite} favorites={favorites} onPhotoClick={handlePhotoClick} imageClass={"photo-list__item"} />
    </div>
  );
};

export default HomeRoute;
