import React, { useState } from 'react';
import { placeNames } from '../../assets/placeList';
import { Button, Center, Icon, Select, tokens } from '../UI';
import { SearchWrapper } from './styles';

const Search = () => {
  const [selected, setSelected] = useState('');

  return (
    <SearchWrapper>
      <Center gap={10} margin="0 20px" maxWidth="500px">
        <Select
          icon={<Icon icon="location" color={tokens.colors.primary} />}
          placeholder="Hova kivankozol?"
          list={placeNames}
          selected={selected}
          setSelected={setSelected}
        />
        <Button icon={<Icon icon="search" />}>Search</Button>
      </Center>
    </SearchWrapper>
  );
};

export default Search;
