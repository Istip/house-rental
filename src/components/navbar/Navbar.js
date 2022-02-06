import PropTypes from 'prop-types';
import React from 'react';
import { Button, Center, Icon } from '../UI';
import { Nav } from './Navbar.styles';

const Navbar = ({ show, setShow }) => {
  return (
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
    </Nav>
  );
};

Navbar.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default Navbar;
