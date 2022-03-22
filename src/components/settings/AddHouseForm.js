import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { placeNames } from '../../assets/placeList';
import { useFirestore } from '../../hooks/useFirestore';
import {
  Button,
  Divider,
  Input,
  Select,
  Text,
  Textarea,
  tokens,
  Center,
} from '../UI';
import { useNavigate } from 'react-router-dom';

const AddHouseForm = () => {
  const initialState = {
    name: '',
    description: '',
    address: '',
    minPerson: 1,
    maxPerson: 1,
    image:
      'https://www.amlu.com/wp-content/uploads/2018/09/new-york-life-insurance-john-kim-ready-to-part-with-manhattan-condo-for-12m6-730x500.jpg',
    price: '',
    promo: false,
    rating: 5,
  };

  const [selected, setSelected] = useState('');
  const [formData, setFormData] = useState(initialState);

  const { name, price, description, address, minPerson, maxPerson } = formData;

  const { addDocument, response } = useFirestore('houses');

  const navigate = useNavigate();

  // Function to change the input field value
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!selected) {
      toast.error('Nem valasztottal helyszint!');
    } else {
      addDocument(formData);
      toast.success('Kiado haz hirdetese letrejott! 🥳');
      navigate('/');
    }
  };

  // If select is changed, change the form data so
  useEffect(() => {
    setFormData({ ...formData, place: selected });
    // eslint-disable-next-line
  }, [selected]);

  // Sending stuff
  useEffect(() => {
    if (response.success) {
      setFormData(initialState);
    }
    // eslint-disable-next-line
  }, [response.success]);

  return (
    <Center>
      <FormWrapper onSubmit={onSubmit}>
        <Center>
          <Text variant="h2" tag="h2" color={tokens.colors.primaryDark2}>
            Haz hozaadasa
          </Text>
        </Center>

        <Divider padding="10px 0" color={tokens.colors.primaryLight2} />

        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Haz neve..."
          label="Haz neve"
          bottom="16px"
          required
          border
          shadow
        />

        <Select
          label="Helyszin"
          placeholder="Valassz a listabol..."
          list={placeNames}
          selected={selected}
          setSelected={setSelected}
          bottom="16px"
          required
          small
        />

        <Input
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={handleChange}
          placeholder="Utca es hazszam..."
          label="Cim"
          bottom="16px"
          required
          border
          shadow
        />

        <Textarea
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Haz, kornyek leirasa..."
          label="Leiras"
          bottom="16px"
          required
          shadow
          rows={6}
        />

        <Center gap={10}>
          <Input
            type="number"
            min={1}
            id="minPerson"
            name="minPerson"
            value={minPerson}
            onChange={handleChange}
            label="Min szemely"
            bottom="4px"
            border
            shadow
          />

          <Input
            type="number"
            min={1}
            id="maxPerson"
            name="maxPerson"
            value={maxPerson}
            onChange={handleChange}
            label="Max ferohely"
            bottom="4px"
            border
            shadow
          />
        </Center>

        <Center style={{ marginBottom: '12px' }}>
          <Text variant="regular12" color={tokens.colors.mediumGrey}>
            Figyelmen kivul hagyhatod ha nem szeretnel min es max erteket
            megszabni!
          </Text>
        </Center>

        <Center>
          <Input
            type="number"
            min={1}
            id="price"
            name="price"
            value={price}
            onChange={handleChange}
            placeholder="A haz ara ejszakara..."
            label="Ar egy szemelyre"
            bottom="16px"
            required
            border
            shadow
          />

          <Center margin="0 0 0 10px">
            <Text tag="div" variant="medium12">
              {' lei/ejszaka'}
            </Text>
          </Center>
        </Center>

        <Button type="submit" block disabled={response.loading === true}>
          Vegeztem
        </Button>
      </FormWrapper>
    </Center>
  );
};

const FormWrapper = styled.form`
  margin: 0 20px;
  padding: 20px;
  max-width: 550px;
  background: ${tokens.colors.primaryWhite};
  border: 1px solid ${tokens.colors.primaryLight2};
  border-radius: 12px;
`;

export default AddHouseForm;
