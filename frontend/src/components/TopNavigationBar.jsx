import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { topics, favorites, fetchPhotosByTopic } = props;

  const hasFavorites = favorites.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='topNavBar-right'>
        <TopicList topics={props.topics} fetchPhotosByTopic={fetchPhotosByTopic} />
        <FavBadge isFavPhotoExist={hasFavorites} />
      </div>
    </div>
  );
};

export default TopNavigation;