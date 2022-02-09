import React from 'react';
import { Center, Text, tokens } from '../UI';
import { Background } from './styles';

const Header = () => {
  return (
    <Background>
      <Center height="calc(100% - 100px)">
        <Text tag="div" color={tokens.colors.primaryBlack}>
          <Center style={{ textAlign: 'center' }}>
            <h1>Hargitai Hazak</h1>
          </Center>
        </Text>
      </Center>
    </Background>
  );
};

export default Header;
