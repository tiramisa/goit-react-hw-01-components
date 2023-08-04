import React from 'react';
import '../Friend/FriendListStyles.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className='friend-card'>
    <li className={`friend-item ${isOnline ? 'online' : 'offline'}`}>
      <span className={`status-indicator ${isOnline ? 'status-online' : 'status-offline'}`}></span>
      <img className='avatar' src={avatar} alt="User avatar" />
      <p className="friend-name">{name}</p>
    </li></div>
  );
};

export default FriendListItem;
