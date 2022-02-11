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
    linear-gradient(to top, transparent, ${tokens.colors.primary}99), url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const SearchWrapper = styled.div`
  margin-top: -100px;
`;

export const HousesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
`;

export const Card = styled.div`
  position: relative;
  background: ${tokens.colors.primaryWhite};
  margin: 0 20px 20px;
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  max-width: 450px;
  border: 1px solid transparent;
  transition: 250ms ease;

  &:hover {
    border: 1px solid ${tokens.colors.primaryLight2};
  }

  &.promo {
    border: 1px solid ${tokens.colors.primary};
  }
`;

export const Promo = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  color: ${tokens.colors.white};
  background: ${tokens.colors.primary};
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 10px 0 0;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
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
  overflow-y: hidden;
`;
