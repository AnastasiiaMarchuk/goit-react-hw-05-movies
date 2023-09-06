import { useLocation } from 'react-router-dom';
import { IconArrow, StyledNavLink } from './BackLink.styled';

export const BackLink = ({ to }) => {
  const location = useLocation();
  return (
    <StyledNavLink to={to} state={location}>
      <IconArrow />
      Go back
    </StyledNavLink>
  );
};
