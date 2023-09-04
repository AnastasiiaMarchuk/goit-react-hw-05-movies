import { styled } from 'styled-components';
import { commonWrapper } from 'styles/GlobalStyles';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 270px;
    background-color: var(--bg-components);
    box-shadow: var(--li-box-shadow);
    transition: transform var(--transition);
    &:hover {
      transform: scale(1.03);
    }

    p {
      font-weight: 500;
    }
  }

  img {
    width: 100%;
    height: 405px;
  }

  div {
    ${commonWrapper}
    height: 74px;
  }
`;
