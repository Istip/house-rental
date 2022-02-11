import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ImageGallery from 'react-image-gallery';
import housePlaceholder from '../assets/housePlaceholder.png';

import { useCollection } from '../hooks/useCollection';
import { LinkWrapper } from './styles';
import { Link, useParams } from 'react-router-dom';

import { Button, Center, Error } from '../components/UI';
import { Description } from '../components/profile';

const Home = () => {
  const { id } = useParams();

  const { documents, error } = useCollection('houses', ['id', '==', id]);

  const images = [
    {
      original: 'https://picsum.photos/id/1012/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1010/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/800/',
    },
    {
      original: 'https://picsum.photos/id/1022/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1025/1000/400/',
    },
  ];

  if (!documents) {
    return null;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  const house = documents[0];

  return (
    <div>
      <Navbar />

      <ImageGallery
        items={images}
        originalAlt={housePlaceholder}
        showFullscreenButton={false}
        showThumbnails={false}
        showPlayButton={false}
        showBullets={true}
        lazyLoad
      />

      <LinkWrapper>
        <Link to="/">
          <Button variant="neutral" block>
            « Go back
          </Button>
        </Link>
      </LinkWrapper>

      <Description house={house} />

      <Center>
        <img
          src="https://www.google.com/maps/d/thumbnail?mid=1GjkX260B59mJ45WveZEV0tepBz8&hl=en"
          alt={house.name}
          style={{ width: '100%', height: 'auto', margin: '20px' }}
        />
      </Center>
    </div>
  );
};

export default Home;
