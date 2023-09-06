import { styled } from 'styled-components';
import { commonWrapper } from 'styles/GlobalStyles';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
  }
  gap: 24px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 160px;
    background-color: var(--bg-components);
    box-shadow: var(--li-box-shadow);
    transition: transform var(--transition);
    &:hover {
      transform: scale(1.03);
    }
    @media (min-width: 1200px) {
      width: 270px;
    }
    p {
      font-weight: 500;
    }
  }

  img {
    width: 100%;
  }

  div {
    ${commonWrapper}
    height: 64px;

    @media (min-width: 768px) {
      height: 74px;
    }
  }
`;
