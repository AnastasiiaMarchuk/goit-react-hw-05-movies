import { styled } from 'styled-components';
import { commonContainerStyles } from 'styles/GlobalStyles';
import bg from '../../assets/images/bg.jpg';

export const Container = styled.div`
  ${commonContainerStyles}
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      ellipse at 85% 0%,
      rgba(63, 66, 66, 0.46) 7%,
      rgba(30, 30, 30, 0.98) 66%,
      rgba(30, 30, 30, 1) 100%
    ),
    url(${bg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: -1;
`;
