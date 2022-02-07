import React from 'react';
import { Header, Search } from '../../components/home';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <Search />
    </div>
  );
};

export default Home;
