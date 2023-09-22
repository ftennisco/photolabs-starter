import { useReducer, useEffect } from "react";

const ACTIONS = {
  TOGGLE_FAVORITE: "TOGGLE_FAVORITE",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
}

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favorites: [],
  photoData: [],
  topicData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVORITE:
      if (state.favorites.includes(action.photoId)) {
        const copyOfFavorites = state.favorites.filter(
          (favPhotoId) => favPhotoId !== action.photoId
        );
        return { ...state, favorites: copyOfFavorites };
      } else {
        return { ...state, favorites: [...state.favorites, action.photoId] };
      }
    case ACTIONS.OPEN_MODAL:
      return { ...state, selectedPhoto: action.photo, isModalOpen: true };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, photoId });
  };

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, photo });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  useEffect(() => {
    async function fetchPhotoData() {
      try {
        const response = await fetch("/api/photos")

        if (response.ok) {
          const data = await response.json();
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
        } else {
          console.error("Failed to fetch photo data from /api/photos");
        }
      } catch (error) {
        console.error("Error while fetching photo data:", error);
      }
    }

    async function fetchTopicData() {
      try {
        const response = await fetch("/api/topics");

        if (response.ok) {
          const data = await response.json();
          dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
        } else {
          console.error("Failed to fetch topic data from /api/topics");
        }
      } catch (error) {
        console.error("Error while fetching topic data:", error);
      }
    }

    fetchPhotoData();
    fetchTopicData();
  }, []);


  return {
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    favorites: state.favorites,
    photoData: state.photoData,
    topicData: state.topicData,
    toggleFavorite,
    openModal,
    closeModal,
  };
};

export default useApplicationData;
