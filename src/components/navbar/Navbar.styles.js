import styled from 'styled-components';
import { tokens } from '../UI';

export const Nav = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${tokens.colors.primaryLight2};
  background: ${tokens.colors.primaryWhite};
  margin-top: ${(props) => (props.show ? 0 : '-50px')};
  transition: 250ms ease;
`;
