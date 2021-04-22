import React from 'react';
import PropTypes from 'prop-types';

import './Profile.scss';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className="profile">
      <div className="profile__description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="profile__avatar"
        />
        <p className="profile__name">{name}</p>
        <p className="profile__tag">@{tag}</p>
        <p className="profile__location">{location}</p>
      </div>

      <ul className="profile__stats">
        <li>
          <span className="profile__label">Followers</span>
          <span className="profile__quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="profile__label">Views</span>
          <span className="profile__quantity">{stats.views}</span>
        </li>
        <li>
          <span className="profile__label">Likes</span>
          <span className="profile__quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,

  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
