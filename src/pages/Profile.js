import React from 'react';
import Navbar from '../components/navbar/Navbar';
import ImageGallery from 'react-image-gallery';
import { useCollection } from '../hooks/useCollection';
import { Button, Error } from '../components/UI';
import { Link, useParams } from 'react-router-dom';
import { LinkWrapper } from './styles';
import { Description } from '../components/profile';

const Home = () => {
  const { id } = useParams();

  const { documents, error } = useCollection('houses', ['id', '==', id]);

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/800/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/400/',
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
        lazyLoad
        showFullscreenButton={false}
        showThumbnails={false}
        showPlayButton={false}
        showBullets={true}
      />

      <LinkWrapper>
        <Link to="/">
          <Button variant="neutral" block>
            « Go back
          </Button>
        </Link>
      </LinkWrapper>

      <Description house={house} />
    </div>
  );
};

export default Home;
