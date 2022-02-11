import React from 'react';
import { useCollection } from '../hooks/useCollection';
import { Header, Search, Houses, House } from '../components/home';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  const { documents } = useCollection('houses');

  if (!documents) {
    return null;
  }

  return (
    <div>
      <Navbar />
      <Header />
      <Search />

      <Houses>
        {documents
          .sort((house) => (house.promo ? -1 : 1))
          .map((house) => (
            <House key={house.id} house={house} />
          ))}
      </Houses>
    </div>
  );
};

export default Home;
