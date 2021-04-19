import React from "react";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div>
    {isOnline ? <span className="status_green"></span> : <span className="status_red"></span>}
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className={name}></p>
  </div>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
