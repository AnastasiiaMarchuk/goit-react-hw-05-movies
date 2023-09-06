import {
  IconMap,
  IconMovie,
  IconStar,
  Image,
  Votes,
  Wrapper,
} from './MovieInfo.styled';
import image from '../../assets/images/profile.png';

export const MovieInfo = ({ movieInfo }) => {
  const { title, overview, poster, genres, country, votes } = movieInfo;
  const posterUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <Wrapper>
      <div>
        <h1>{title}</h1>
        <ul>
          <Votes>
            <IconStar />
            {votes}
          </Votes>
          <li>
            <IconMovie />
            {genres}
          </li>
          <li>
            <IconMap />
            {country}
          </li>
        </ul>
        <div>
          <h2>Overview</h2>
          <p> {overview} </p>
        </div>
      </div>
      <Image src={poster ? `${posterUrl}${poster}` : image} alt={title} />
    </Wrapper>
  );
};
