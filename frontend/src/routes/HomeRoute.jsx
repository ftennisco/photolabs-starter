import React, { useState, useEffect } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ openModal, favorites, toggleFavorite, photoData, photosByTopic, topicData, fetchPhotosByTopic }) => {
  const handlePhotoClick = (photoId) => {
    const photo = photoData.find((photo) => photo.id === photoId);
    openModal(photo);
  }

  return (
    <div className="home-route">
      <TopNavigation topics={topicData} favorites={favorites} fetchPhotosByTopic={fetchPhotosByTopic} />
      <PhotoList
        photos={photoData}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        onPhotoClick={handlePhotoClick}
        imageClass={"photo-list__item"}
      />
    </div>
  );
};

export default HomeRoute;
