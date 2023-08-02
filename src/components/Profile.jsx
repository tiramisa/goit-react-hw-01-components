import React from 'react';

const profileStyles = {
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0 9px 10px rgba(0, 0, 9, 0.2), 9px 0 10px rgba(0, 0, 9, 0.2)',
    margin: '144px',
    width: '385px',
    backgroundColor: '#fff',
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: '50%',
    paddingBottom: '50px',
    paddingTop: '40px',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    paddingBottom: '15px',
  },
  tag: {
    paddingBottom: '10px',
    color: '#888',
  },
  location: {
    color: '#888',
    paddingBottom: '50px',
  },
  stats: {
    listStyle: 'none',
    alignItems: 'center',
    backgroundColor: 'rgb(215 230 245)',
    borderRadius: '0 0 3px 3px',
    borderTop: '2px solid #80808050',
    display: 'flex',
    height: '100px',
    width: '100%',
    justifyContent: 'space-evenly',
    position: 'relative',
  },
  label: {
    color: 'black',
    padding: '10px',
    display: 'block',
    alignItems: 'center',
    textAlign: 'center',
  },
  quantity: {
    fontWeight: 'bold',
    paddingLeft: '15px',
  },
};

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div style={profileStyles.profile} className="profile">
      <div style={profileStyles.description} className="description">
        <img
          src={avatar}
          alt="User avatar"
          style={profileStyles.avatar}
          className="avatar"
          width={150}
          height={150}
        />
        <p style={profileStyles.name} className="name">
          {username}
        </p>
        <p style={profileStyles.tag} className="tag">
          @{tag}
        </p>
        <p style={profileStyles.location} className="location">
          {location}
        </p>
      </div>

      <ul style={profileStyles.stats} className="stats">
        <li>
          <span style={profileStyles.label} className="label">
            Followers
          </span>
          <span style={profileStyles.quantity} className="quantity">
            {stats.followers}
          </span>
        </li>
        <li>
          <span style={profileStyles.label} className="label">
            Views
          </span>
          <span style={profileStyles.quantity} className="quantity">
            {stats.views}
          </span>
        </li>
        <li>
          <span style={profileStyles.label} className="label">
            Likes
          </span>
          <span style={profileStyles.quantity} className="quantity">
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
