import React, { useState } from 'react';

const friendListStyles = {
  listStyle: 'none',
  padding: '0',
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  const [isHovered, setIsHovered] = useState(false);

  const listItemStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s',
    cursor: 'pointer',
    backgroundColor: isHovered ? '#96e0dd' : '#f3f3f3', // Добавляем изменение цвета карточки при ховере
  };

  const statusStyles = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    marginRight: '10px',
  };

  const avatarStyles = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
  };

  const hoverStyles = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <li
      style={{ ...listItemStyles, ...(isHovered && hoverStyles) }}
      className={`friend-item ${isOnline ? 'online' : 'offline'}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <span
        style={{
          ...statusStyles,
          backgroundColor: isOnline ? 'green' : 'red',
        }}
        className={isOnline ? 'status-online' : 'status-offline'}
      ></span>
      <img style={avatarStyles} src={avatar} alt="User avatar" />
      <p style={{ marginLeft: '10px', fontSize: '18px' }}>{name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => {
  const listStyles = {
    maxWidth: '500px',
    margin: '0 auto',
  };

  return (
    <ul style={{ ...friendListStyles, ...listStyles }}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;





