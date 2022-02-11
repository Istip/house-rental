import styled from 'styled-components';
import { tokens } from '../UI';

export const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 20px;
  margin: 20px 20px 10px;
  background: ${tokens.colors.primaryWhite};
  border-radius: 12px;
  border: 1px solid ${tokens.colors.primaryLight2};
`;

export const ListItem = styled.li`
  padding: 5px 0;
`;
