import { Container, Icon, StyledNavLink, Wrapper } from './Header.styled';

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <StyledNavLink to="/">
          <Icon />
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Container>
    </Wrapper>
  );
};
