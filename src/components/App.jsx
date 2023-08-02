import React from 'react';
import Profile from './Profile';
import user from './user.json';
import Statistics from './Statistics'
import data from './data.json'

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
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};


