import { MdMovieFilter } from 'react-icons/md';
import { BiSolidStar, BiSolidMap } from 'react-icons/bi';
import { styled } from 'styled-components';

const commonItemStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 10px 20px 10px;

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 50px;
    padding: 70px 0 20px;
  }

  @media (min-width: 1200px) {
    flex-wrap: nowrap;
    padding: 70px 70px 20px 70px;
  }

  div {
    display: flex;
    padding-top: 30px;
    flex-direction: column;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 14px 0;
    width: 100%;
    gap: 8px;

    @media (min-width: 1200px) {
      flex-direction: row;
      justify-content: space-between;
    }

    li {
      ${commonItemStyles}
    }
  }
`;

export const IconStar = styled(BiSolidStar)`
  color: var(--title-color);
  font-size: 18px;
`;

export const IconMovie = styled(MdMovieFilter)`
  color: var(--accent-color);
  font-size: 18px;
`;

export const IconMap = styled(BiSolidMap)`
  color: var(--accent-color);
  font-size: 18px;
`;

export const Votes = styled.li`
  ${commonItemStyles}
  font-weight: 500;
  font-size: 18px;
`;

export const Image = styled.img`
  box-shadow: var(--li-box-shadow);
  width: 250px;

  @media (min-width: 768px) {
    width: 300px;
  }
`;
