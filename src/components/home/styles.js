import styled from 'styled-components';
import { tokens } from '../UI';
import bg from '../../assets/home.jpg';

export const Background = styled.div`
  width: 100%;
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

export const Card = styled.div`
  background: ${tokens.colors.primaryWhite};
  margin: 20px;
  border-radius: 2px;
  padding: 10px;
  cursor: pointer;
`;

export const CardContent = styled.div`
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 2px;
  background-repeat: no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(
      to bottom,
      transparent,
      ${tokens.colors.primaryDark1}99
    ),
    ${(props) => `url(${props.image})`};
`;

export const Description = styled.div`
  margin: 10px 0 20px;
  max-height: 60px;
  overflow-y: hidden;
`;
