import React from 'react';

const House = ({ house }) => {
  return (
    <div>
      <h3>{house.name}</h3>
      <p>{house.place}</p>
      <p>{house.address}</p>
      <br />
      <p>{house.description}</p>
      <p>
        <b>{house.price}</b> lei / ejszaka
      </p>
      <br />
    </div>
  );
};

export default House;
