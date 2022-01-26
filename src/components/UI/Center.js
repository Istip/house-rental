import React from 'react';
import styled from 'styled-components';

const Center = (props) => {
  return <Centered {...props}>{props.children}</Centered>;
};

const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => `${props.gap}px` || 0};
  flex-direction: ${(props) => props.direction || 'row'};
`;

export default Center;
