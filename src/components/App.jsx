import React from 'react';
import Profile from './Profile/Profile';
import user from '../data/user.json';
import GetStatistics from './Statistics/Statistics'
import data from '../data/data.json'
import FriendList from './Friend/FriendList';
import friends from '../data/friends.json';
import TransactionHistory from './Transaction/TransactionHistory';
import transactions from '../data/transactions.json';
import 'modern-normalize';


const profileStyles = {
  display: 'flex',
    justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

export const App = () => (
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
    <TransactionHistory items={transactions} />
  </div>
)