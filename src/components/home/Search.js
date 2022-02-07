import React from 'react';
import { Button, Center, Icon, Select, tokens } from '../UI';
import { SearchWrapper } from './styles';

const Search = () => {
  return (
    <SearchWrapper>
      <Center gap={10} margin="0 20px">
        <Select
          icon={<Icon icon="search" color={tokens.colors.primary} />}
          list={['Hello', 'Darkness', 'My Old', 'Friend']}
        />
        <Button>Search</Button>
      </Center>
    </SearchWrapper>
  );
};

export default Search;
