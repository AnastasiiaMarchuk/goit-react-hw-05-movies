import { MdArrowBackIosNew } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  transition: color 250ms ease;

  &:hover,
  &:focus {
    color: var(--accent-color);
  }

  &.active {
    color: var(--accent-color);
  }
`;

export const IconArrow = styled(MdArrowBackIosNew)`
  font-size: 14px;
  margin-right: 6px;
  color: var(--accent-color);
`;
