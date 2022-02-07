import React, { useState } from 'react';
import { Button, Center, Icon } from '../UI';
import { Nav, NavCloser } from './Navbar.styles';

const Navbar = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Nav show={show}>
        <Center height="100%" gap={10} between margin="0 20px">
          <h3>NAVBAR</h3>
          <Button
            size="medium"
            variant="secondary"
            onClick={() => setShow(false)}
          >
            <Icon icon="close" />
          </Button>
        </Center>
        {!show && (
          <NavCloser>
            <Button
              size="medium"
              variant="secondary"
              onClick={() => setShow(true)}
            >
              <Icon icon="menu" />
            </Button>
          </NavCloser>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
