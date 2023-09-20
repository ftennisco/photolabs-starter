import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import ModalPicture from '../components/ModalPicture';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({ closeModal, selectedPhoto, favorites, toggleFavorite }) => {
  const handleCloseClick = () => {
    closeModal();
  };

  console.log("Selected Photo", selectedPhoto)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <ModalPicture photoData={selectedPhoto} favorites={favorites} toggleFavorite={toggleFavorite} />
      <div className='photo-details-modal__header'>
        <p>Similar Photos</p>
      </div>
      <PhotoList photos={Object.values(selectedPhoto.similar_photos)} toggleFavorite={toggleFavorite} favorites={favorites} imageClass={'photo-details-modal__images'} />
    </div>
  )
};

export default PhotoDetailsModal;
