import React, { useState } from 'react';
import { placeNames } from '../../assets/placeList';
import { Button, Center, Icon, Select, tokens } from '../UI';
import { SearchWrapper } from './styles';

const Search = () => {
  const [selected, setSelected] = useState('');

  return (
    <SearchWrapper>
      <Center gap={10} margin="0 20px">
        <Select
          icon={<Icon icon="search" color={tokens.colors.primary} />}
          list={placeNames}
          selected={selected}
          setSelected={setSelected}
        />
        <Button>Search</Button>
      </Center>
    </SearchWrapper>
  );
};

export default Search;
