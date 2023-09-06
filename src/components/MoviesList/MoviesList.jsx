import { Link, useLocation } from 'react-router-dom';
import { List } from './MoviesList.styled';
import image from '../../assets/images/profile.png';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const posterUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={poster_path ? `${posterUrl}${poster_path}` : image}
                alt={title}
              />
              <div>
                <p>{title}</p>
              </div>
            </Link>
          </li>
        ))}
      </List>
    </>
  );
};
