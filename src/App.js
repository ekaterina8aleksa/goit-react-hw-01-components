import React from 'react';

import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Container from './components/Container/Container';

const App = () => (
  <Container>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    {/* <Statistics stats={statisticalData} /> */}
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </Container>
);

export default App;
