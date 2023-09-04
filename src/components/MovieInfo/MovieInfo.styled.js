import { MdMovieFilter } from 'react-icons/md';
import { BiSolidStar, BiSolidMap } from 'react-icons/bi';
import { styled } from 'styled-components';

export const Image = styled.img`
  width: 300px;
  box-shadow: var(--li-box-shadow);
`;

export const Box = styled.div`
  display: flex;
  gap: 50px;
  padding: 20px 70px 20px 70px;
`;

export const Description = styled.div`
  display: flex;
  padding-top: 30px;
  flex-direction: column;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 14px 0;
  width: 100%;
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

const commonItemStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
`;

export const Item = styled.li`
  ${commonItemStyles}
`;

export const Votes = styled.li`
  ${commonItemStyles}
  font-weight: 500;
  font-size: 20px;
`;
