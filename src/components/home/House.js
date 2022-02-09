import React from 'react';
import { Center, Text, tokens } from '../UI';
import { Card, CardContent, CardImage, Description } from './styles';

const House = ({ house }) => {
  return (
    <Card>
      <CardImage image={house.image} />
      <CardContent>
        <Text color={tokens.colors.primaryDark2} variant="h2">
          {house.name}
        </Text>
        <Text color={tokens.colors.primaryDark1} variant="medium14">
          {house.place}
        </Text>
        <Text color={tokens.colors.primaryDark1} variant="medium14">
          {house.address}
        </Text>

        <Description>
          <Text color={tokens.colors.darkGrey} variant="regular14">
            {house.description.substring(0, 100)}...
          </Text>
        </Description>

        <Center
          style={{
            padding: '10px',
            background: `${tokens.colors.white}`,
            borderRadius: '2px',
          }}
        >
          <Text variant="regular14" color={tokens.colors.darkGrey}>
            <Text
              tag="span"
              variant="medium14"
              color={tokens.colors.primaryBlack}
            >
              {house.price}
            </Text>{' '}
            lei / ejszaka
          </Text>
        </Center>
      </CardContent>
    </Card>
  );
};

export default House;
