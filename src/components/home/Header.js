import React from 'react';
import { Center, Text, tokens } from '../UI';
import { Background } from './styles';

const Header = () => {
  return (
    <Background>
      <Center height="calc(100% - 100px)">
        <Text tag="div" color={tokens.colors.primaryDark1}>
          <h1>HARGITAI HAZAK</h1>
        </Text>
      </Center>
    </Background>
  );
};

export default Header;
