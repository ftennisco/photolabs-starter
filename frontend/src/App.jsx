import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    if (favorites.includes(photoId)) {
      const copyOfFavorites = [...favorites].filter(favPhotoId => favPhotoId !== photoId);
      setFavorites(copyOfFavorites);
      return;
    } else {
      setFavorites(prev => [...prev, photoId])
    }
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute openModal={openModal} setSelectedPhoto={setSelectedPhoto} favorites={favorites} toggleFavorite={toggleFavorite} />
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto} favorites={favorites} toggleFavorite={toggleFavorite} />}
    </div>
  );
};

export default App;
