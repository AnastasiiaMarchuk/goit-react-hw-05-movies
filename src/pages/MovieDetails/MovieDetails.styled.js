import styled from 'styled-components';
import { MdOutlineReviews } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 50px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: end;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(188, 188, 188, 0.6);
    filter: blur(1px);
  }
`;

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.4;
  padding-right: 8px;
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const IconPeople = styled(IoIosPeople)`
  margin-right: 6px;
  font-size: 16px;
  color: var(--accent-color);
`;

export const IconReviews = styled(MdOutlineReviews)`
  font-size: 14px;
  margin-right: 6px;
  margin-left: 100px;
  color: var(--accent-color);
`;

export const StyledNavLink = styled(NavLink)`
  transition: var(--transition);
  &:hover,
  &:focus {
    color: var(--accent-color);
  }

  &.active {
    color: var(--accent-color);
  }
`;
