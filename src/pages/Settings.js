import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Avatar, Button } from '../components/UI';
import { useAuthContext } from '../hooks/useAuthContext';

const Settings = () => {
  const { user } = useAuthContext();

  console.log({ user });

  return (
    <div>
      <Navbar />
      Hello{' '}
      <Button>
        <Avatar name={user.displayName} image={user.photoURL} />
      </Button>{' '}
      my old friend!
      <b>
        <Avatar name={user.displayName} />
      </b>
    </div>
  );
};

export default Settings;
