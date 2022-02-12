import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { AddHouseForm } from '../components/settings';
import { Center, Text, tokens } from '../components/UI';
import { useAuthContext } from '../hooks/useAuthContext';

const Settings = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <Navbar />
      <Center margin="20px 0" direction="column">
        <Text variant="h2" color={tokens.colors.primaryBlack}>
          Hello
        </Text>
        <Text variant="h3" color={tokens.colors.primary}>
          {user.displayName}.
        </Text>
      </Center>

      <AddHouseForm />
    </div>
  );
};

export default Settings;
