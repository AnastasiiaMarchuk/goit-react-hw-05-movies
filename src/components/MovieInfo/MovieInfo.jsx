import {
  Box,
  Description,
  IconMap,
  IconMovie,
  IconStar,
  Image,
  Item,
  List,
  Votes,
} from './MovieInfo.styled';
import image from '../../assets/images/profile.png';
import { Link } from 'react-router-dom';

export const MovieInfo = ({ movieInfo }) => {
  const { id, title, overview, poster, genres, country, votes } = movieInfo;
  return (
    <Box>
      <Link to={`/movies/${id}`} />
      <Description>
        <h1>{title}</h1>
        <List>
          <Votes>
            <IconStar />
            {votes}
          </Votes>
          <Item>
            <IconMovie />
            {genres}
          </Item>
          <Item>
            <IconMap />
            {country}
          </Item>
        </List>
        <div>
          <h2>Overview</h2>
          <p> {overview} </p>
        </div>
      </Description>
      <Image
        src={poster ? `https://image.tmdb.org/t/p/original/${poster}` : image}
        alt={title}
      />
    </Box>
  );
};
