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
`;

export const Title = styled.div`
  padding: 150px 80px 50px;
  h1 {
    color: var(--main-color);
  }
  span {
    display: flex;
    margin-left: 80px;
    font-size: 56px;
    color: var(--title-color);
    align-self: flex-end;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  align-self: flex-end;
  width: 350px;
  transition: color var(--transition);

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
