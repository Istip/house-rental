import React from 'react';
import { Center, Text, tokens } from '../UI';
import { Background } from './styles';

const Header = () => {
  return (
    <Background>
      <Center height="calc(100% - 100px)">
        <Text tag="div" color={tokens.colors.primaryDark1}>
          <Center
            style={{
              textAlign: 'center',
              marginTop: 'calc(50vh - 300px)',
            }}
          >
            <Text variant="h1" tag="h1">
              <b>Hargitai Hazak</b>{' '}
            </Text>
          </Center>
        </Text>
      </Center>
    </Background>
  );
};

export default Header;
