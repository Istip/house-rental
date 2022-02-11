import React from 'react';
import { Link } from 'react-router-dom';

import { Center, Icon, Text, tokens } from '../UI';
import { Card, CardContent, CardImage, Description, Promo } from './styles';
import housePlaceholder from '../../assets/housePlaceholder.png';

const House = ({ house }) => {
  const textStyle = {
    padding: '20px 30px',
    background: `${tokens.colors.white}`,
    borderRadius: '8px',
  };

  return (
    <Card className={house.promo ? 'promo' : ''}>
      {house.promo && (
        <Promo>
          <Text variant="black12">Promoted</Text>
        </Promo>
      )}

      <Link to={`/houses/${house.id}`}>
        <CardImage image={house.image || housePlaceholder} />
        <CardContent>
          <Text color={tokens.colors.primaryDark2} variant="h2">
            {house.name}
          </Text>

          <div style={{ marginBottom: '10px' }} />

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

          <Center style={textStyle} between>
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

            <Icon
              icon="chevronRight"
              color={tokens.colors.primaryBlack}
              size={12}
            />
          </Center>
        </CardContent>
      </Link>
    </Card>
  );
};

export default House;
