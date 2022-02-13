import React, { useState } from 'react';
import styled from 'styled-components';
import { placeNames } from '../../assets/placeList';
import { Button, Divider, Input, Select, Text, Textarea, tokens } from '../UI';

const AddHouseForm = () => {
  const [selected, setSelected] = useState('');

  return (
    <FormWrapper>
      <Text variant="h3" color={tokens.colors.primaryDark2}>
        Haz hozaadasa
      </Text>

      <Divider padding="10px 0" color={tokens.colors.primaryWhite} />

      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Haz neve..."
        label="Haz neve"
        bottom="8px"
        required
        border
        shadow
      />

      <Select
        label="Haz helye"
        placeholder="Valassz a listabol"
        list={placeNames}
        selected={selected}
        setSelected={setSelected}
        bottom="8px"
        required
        small
      />

      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Pontos utca nev es hazszam..."
        label="Cim"
        bottom="8px"
        required
        border
        shadow
      />

      <Textarea
        type="text"
        id="name"
        name="name"
        placeholder="Haz, kornyek leirasa..."
        label="Leiras"
        bottom="8px"
        required
        shadow
        rows={6}
      />

      <br />

      <Button block>Vegeztem</Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  margin: 0 20px;
`;

export default AddHouseForm;
