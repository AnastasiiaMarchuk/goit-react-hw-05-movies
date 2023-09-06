import { Container, Icon, StyledNavLink, Wrapper } from './Header.styled';

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <li>
          <StyledNavLink to="/">
            <Icon />
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </li>
      </Container>
    </Wrapper>
  );
};
