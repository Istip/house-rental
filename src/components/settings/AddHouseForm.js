import React from 'react';
import styled from 'styled-components';
import { Button, Divider, Input, Select, Text, tokens } from '../UI';

const AddHouseForm = () => {
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

      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Haz, kornyek leirasa..."
        label="Leiras"
        bottom="8px"
        required
        border
        shadow
      />

      <Select label="Haz helye" />

      <br />

      <Button block>Vegeztem</Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  margin: 0 20px;
`;

export default AddHouseForm;
