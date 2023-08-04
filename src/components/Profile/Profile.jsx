import React from 'react';
import './ProfileStyles.css'; 

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="ProfileWrapper">
      <div className="ProfileDescription">
        <img
          src={avatar}
          alt="User avatar"
          className="Avatar"
          width={150}
          height={150}
        />
        <p className="Name">{username}</p>
        <p className="Tag">@{tag}</p>
        <p className="Location">{location}</p>
      </div>

      <ul className="StatsList">
        <li className="StatItem">
          <span>Followers</span>
          <span className="Quantity">{stats.followers}</span>
        </li>
        <li className="StatItem">
          <span>Views</span>
          <span className="Quantity">{stats.views}</span>
        </li>
        <li className="StatItem">
          <span>Likes</span>
          <span className="Quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;


