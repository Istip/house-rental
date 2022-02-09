import styled from 'styled-components';
import { tokens } from '../UI';
import bg from '../../assets/home.jpg';

export const Background = styled.div`
  width: 100vw;
  height: 50vh;
  overflow: hidden;
  background-image: linear-gradient(
      to bottom,
      transparent,
      ${tokens.colors.white}
    ),
    linear-gradient(to top, transparent, ${tokens.colors.warning}), url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const SearchWrapper = styled.div`
  margin-top: -100px;
`;
export const HousesWrapper = styled.div`
  margin-top: 50px;
`;
