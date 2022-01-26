import styled from 'styled-components';
import bg from '../../assets/home.jpg';
import { tokens } from '../UI';

export const Background = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(
      to bottom,
      transparent,
      ${tokens.colors.primaryDark2}
    ),
    url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

export const AuthForm = styled.form`
  width: 80vw;
  max-width: 600px;
`;

export const Title = styled.div`
  margin: 60px 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthSwitcher = styled.div`
  cursor: pointer;
`;
