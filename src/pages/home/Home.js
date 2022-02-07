import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ImageGallery from 'react-image-gallery';

const Home = () => {
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

  return (
    <div>
      <Navbar />

      <ImageGallery
        items={images}
        lazyLoad
        showThumbnails={false}
        showPlayButton={false}
        showBullets={true}
      />
    </div>
  );
};

export default Home;
