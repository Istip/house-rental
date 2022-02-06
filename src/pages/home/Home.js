import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Button, Center, Icon } from '../../components/UI';

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Navbar show={show} setShow={setShow} />
      <Center gap={10} direction="column">
        <h1>Hello</h1>
        <h3>You are logged in!</h3>
        {!show && (
          <Button
            variant="secondary"
            size="medium"
            onClick={() => setShow(true)}
          >
            <Icon icon="menu" />
          </Button>
        )}
      </Center>
    </div>
  );
};

export default Home;
