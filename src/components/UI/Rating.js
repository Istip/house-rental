import React from 'react';

const Rating = ({ rate }) => {
  const roundedRate = Math.round(rate);

  function range(start, stop, step) {
    var a = [start],
      b = start;
    while (b < stop) {
      a.push((b += step || 1));
    }
    return a;
  }

  const stars = range(1, roundedRate, 1);

  return <div>Rating: {stars.map((item) => '❤')}</div>;
};

export default Rating;
