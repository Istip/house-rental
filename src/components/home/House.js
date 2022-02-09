import React from 'react';
import { Center, Text, tokens } from '../UI';
import { Card, CardContent, CardImage, Description } from './styles';

const House = ({ house }) => {
  return (
    <Card>
      <CardImage image={house.image} />
      <CardContent>
        <Text color={tokens.colors.primary} variant="h2">
          {house.name}
        </Text>
        <Text color={tokens.colors.primaryLight1} variant="medium14">
          {house.place}
        </Text>
        <Text color={tokens.colors.primaryLight1} variant="medium14">
          {house.address}
        </Text>

        <Description>
          <Text color={tokens.colors.primaryLight2} variant="regular14">
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
          <Text variant="regular14">
            <Text tag="span" variant="medium14">
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
