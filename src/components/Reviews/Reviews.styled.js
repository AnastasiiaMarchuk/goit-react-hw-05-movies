import { styled } from 'styled-components';

export const Item = styled.li`
  padding: 20px;
  margin-bottom: 20px;
  background-color: var(--bg-components);
  box-shadow: var(--li-box-shadow);
`;

export const Subscript = styled.p`
  text-align: end;
  font-size: 16px;
`;

export const Wrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-bottom: 30px;

  img {
    width: 200px;
  }

  p {
    top: 50%;
    position: absolute;
    color: #616161;
    font-size: 30px;
    z-index: 100;
  }
`;
