import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ImageGallery from 'react-image-gallery';
import housePlaceholder from '../assets/housePlaceholder.png';

import { useCollection } from '../hooks/useCollection';
import { LinkWrapper } from './styles';
import { Link, useParams } from 'react-router-dom';

import { Button, Center, Error, Icon, tokens } from '../components/UI';
import { Description } from '../components/profile';

const Home = () => {
  const { id } = useParams();

  const { documents, error } = useCollection('houses', ['id', '==', id]);

  // random number used to randomize image number
  // remove when replaced with real images from the databse
  const randomNumber = Math.ceil(Math.random() * 100);

  const images = [
    {
      original: `https://picsum.photos/id/1${randomNumber - 1}/1000/600/`,
    },
    {
      original: `https://picsum.photos/id/1${randomNumber + 1}/1000/600/`,
    },
    {
      original: `https://picsum.photos/id/1${randomNumber - 2}/1000/600/`,
    },
    {
      original: `https://picsum.photos/id/1${randomNumber + 2}/1000/600/`,
    },
    {
      original: `https://picsum.photos/id/1${randomNumber - 3}/1000/600/`,
    },
    {
      original: `https://picsum.photos/id/1${randomNumber + 3}/1000/600/`,
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
          <Button
            variant="neutral"
            block
            icon={
              <Icon
                icon="chevronLeft"
                size={12}
                color={tokens.colors.primaryBlack}
              />
            }
          >
            Vissza
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
