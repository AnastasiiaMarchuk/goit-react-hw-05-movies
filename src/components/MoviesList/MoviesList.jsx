import { Link } from 'react-router-dom';
import { List } from './MoviesList.styled';
import image from '../../assets/images/profile.png';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} id={id}>
          <Link to={`/${id}`}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original/${poster_path}`
                  : image
              }
              alt={title}
            />
            <div>
              <p>{title}</p>
            </div>
          </Link>
        </li>
      ))}
    </List>
  );
};
