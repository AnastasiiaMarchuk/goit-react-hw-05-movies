import styled from 'styled-components';
import { commonWrapper } from 'styles/GlobalStyles';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  li {
    display: flex;
    flex-direction: column;
    width: 180px;
    background-color: var(--bg-components);
    box-shadow: var(--li-box-shadow);

    @media (min-width: 768px) {
      width: 210px;
    }

    @media (min-width: 1200px) {
      width: 250px;
    }
  }

  img {
    width: 100%;
  }
  div {
    ${commonWrapper}
    height: 98px;
    @media (min-width: 768px) {
      height: 116px;
    }
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 4px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
