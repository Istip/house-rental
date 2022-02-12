import React from 'react';
import styled from 'styled-components';
import { Icon, Center, Text } from '../UI';
import tokens from './tokens';

const Rating = ({ rate }) => {
  const roundedRate = Math.round(rate);

  const emptyHeart = 5 - roundedRate;

  const Hearts = ({ number, icon }) => {
    return [...Array(number)].map((star, i) => (
      <Icon key={i} icon={icon} size={12} />
    ));
  };

  return (
    <Text tag="div" variant="medium14" color={tokens.colors.warning}>
      <RateWrapper>
        Rating:
        <Center>
          <Hearts number={roundedRate} icon="heart" />
          <Hearts number={emptyHeart} icon="heartEmpty" />
        </Center>
        <Text variant="regular12" color={tokens.colors.lightGrey}>
          (by 12 rates)
        </Text>
      </RateWrapper>
    </Text>
  );
};

const RateWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export default Rating;
