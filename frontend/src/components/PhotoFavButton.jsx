import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const isLiked = props.favorites.includes(props.id)

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => props.toggleFavorite(props.id)}>
        <FavIcon displayAlert={false} isLiked={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;