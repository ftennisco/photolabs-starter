import React, { useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from "./hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    isModalOpen,
    selectedPhoto,
    favorites,
    toggleFavorite,
    openModal,
    closeModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute openModal={openModal} favorites={favorites} toggleFavorite={toggleFavorite} />
      {isModalOpen && <PhotoDetailsModal closeModal={closeModal} selectedPhoto={selectedPhoto} favorites={favorites} toggleFavorite={toggleFavorite} />}
    </div>
  );
};

export default App;
