import React from 'react';
import Profile from './Profile';
import user from './user.json';

const profileStyles = {
  display: 'flex',
    justifyContent: 'center',
  alignItems: 'center',
};

export const App = () => {
  return (
    <div style={profileStyles}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};


