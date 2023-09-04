import { styled } from 'styled-components';

export const Button = styled.button`
  padding: 8px 16px;
  background-color: var(--bg-components);
  transition: all var(--transition);
  text-align: center;
  display: block;
  margin: 20px auto;
  color: var(--main-color);
  border: 1px solid var(--border-color);
  box-shadow: var(--button-box-shadow);
  cursor: pointer;
  font-family: inherit;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  &:hover {
    color: var(--title-color);
    border: 1px solid var(--title-color);
  }
`;
