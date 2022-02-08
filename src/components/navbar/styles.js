import styled from 'styled-components';
import { tokens } from '../UI';

export const Nav = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${tokens.colors.primary};
  background: ${tokens.colors.primaryWhite};
  margin-top: ${(props) => (props.show ? 0 : '-50px')};
  transition: 250ms ease;
  z-index: 5;
`;

export const NavCloser = styled.div`
  position: absolute;
  right: 0;
  margin: 20px;
`;
