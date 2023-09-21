import { useState } from "react";
import { useReducer } from "react";

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favorites: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      if (state.favorites.includes(action.photoId)) {
        const copyOfFavorites = state.favorites.filter(
          (favPhotoId) => favPhotoId !== action.photoId
        );
        return { ...state, favorites: copyOfFavorites };
      } else {
        return { ...state, favorites: [...state.favorites, action.photoID] };
      }
    case "OPEN_MODAL":
      return { ...state, selectedPhoto: action.photo, isModalOpen: true };
    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorite = (photoId) => {
    dispatch({ type: "TOGGLE_FAVORITE", photoId });
  };

  const openModal = (photo) => {
    dispatch({ type: "OPEN_MODAL", photo });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return {
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    favorites: state.favorites,
    toggleFavorite,
    openModal,
    closeModal
  };
};

export default useApplicationData;
