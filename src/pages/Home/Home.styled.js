import { BiSearchAlt } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Hero = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 1px;
    background-color: rgba(188, 188, 188, 0.6);
    filter: blur(1px);
  }
  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Title = styled.div`
  padding: 60px 10px 10px;
  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
    padding: 100px 80px 50px;
  }

  @media (min-width: 1200px) {
    padding: 150px 80px 50px;
  }

  h1 {
    color: var(--main-color);
  }
  span {
    display: flex;
    color: var(--title-color);
    align-self: flex-end;
    font-size: 36px;
    @media (min-width: 480px) {
    }

    @media (min-width: 768px) {
      font-size: 46px;
    }

    @media (min-width: 1200px) {
      margin-left: 80px;
      font-size: 56px;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  align-self: flex-end;
  transition: color var(--transition);

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
    width: 350px;
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
  }

  &:hover,
  &:focus {
    color: var(--accent-color);
  }

  &.active {
    color: var(--accent-color);
  }
`;

export const Icon = styled(BiSearchAlt)`
  margin-right: 4px;
  font-size: 28px;
  color: var(--accent-color);
  transition: background-color 0.3s ease;
`;
