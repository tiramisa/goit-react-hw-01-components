import React from 'react';
import Profile from './Profile';
import user from './user.json';
import GetStatistics from './Statistics'
import data from './data.json'
import FriendList from './FriendList';
import friends from './friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from './transactions.json';


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
      <GetStatistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};


