import { RiMovie2Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { commonContainerStyles } from 'styles/GlobalStyles';

export const Wrapper = styled.nav`
  box-shadow: var(--li-box-shadow);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: var(--bg-components);
  box-shadow: var(--button-box-shadow);
`;

export const Container = styled.ul`
  ${commonContainerStyles}
  display: flex;
  align-items: center;
  gap: 40px;
  font-size: 18px;
  font-weight: 500;
  padding: 12px 16px;
`;

export const Icon = styled(RiMovie2Line)`
  font-size: 14px;
  margin-right: 2px;
  color: var(--accent-color);
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  transition: color var(--transition);

  &:hover,
  &:focus {
    color: var(--accent-color);
  }

  &.active {
    color: var(--accent-color);
  }
`;
