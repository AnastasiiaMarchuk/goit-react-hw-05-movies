import { BiSearchAlt } from 'react-icons/bi';
import { styled } from 'styled-components';

export const Form = styled.form`
  padding: 80px 0 30px;
  display: flex;
  gap: 20px;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    border: 1px solid var(--border-color);
    box-shadow: var(--button-box-shadow);
    transition: all var(--transition);
    &:hover {
      border: 1px solid var(--title-color);
    }
    &:focus {
      border: 1px solid var(--title-color);
    }
  }

  input {
    width: 100%;
    height: 50px;
    background-color: var(--bg-components);
    border: none;
    padding: 10px;
    font-size: 20px;
    color: var(--main-color);

    &::placeholder {
      color: var(--main-color);
      font-size: 16px;
    }
  }
  button {
    border: none;
    width: 50px;
    height: 50px;
    background-color: var(--bg-components);
    transition: var(--transition);
  }
  label {
    font-size: 24px;
    font-weight: 500;
    color: var(--title-color);
  }
`;

export const Icon = styled(BiSearchAlt)`
  margin-top: 6px;
  font-size: 30px;
  color: var(--main-color);
  transition: all var(--transition);
  &:hover {
    color: var(--title-color);
  }
`;
