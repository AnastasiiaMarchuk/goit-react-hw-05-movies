import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { getMovieInfos } from 'services/API';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import {
  IconPeople,
  IconReviews,
  Links,
  StyledNavLink,
} from './MovieDetails.styled';
import { BackLink } from '../../components/BackLink/BackLink';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieInfo = async () => {
      try {
        const movie = await getMovieInfos(movieId);
        const genres = movie.genres.map(genre => genre.name);
        const countries = movie.production_countries.map(
          country => country.name
        );
        const movieInfo = {
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          poster: movie.poster_path,
          votes: movie.vote_average.toFixed(1),
          genres: genres.join(' ◇ '),
          country: countries.join(' ◇ '),
        };
        setMovieInfo(movieInfo);
      } catch (error) {
        toast.error(
          'Oops, something went wrong. Please try reloading the page.',
          {
            style: {
              borderRadius: '10px',
              background: 'var(--bg-color)',
              color: 'var(--main-color)',
              textAlign: 'center',
              width: '300px',
            },
          }
        );
      }
    };
    fetchMovieInfo();
  }, [movieId]);

  return (
    <>
      <MovieInfo movieInfo={movieInfo} />

      <section>
        <Links>
          <div>
            <StyledNavLink to="cast">
              <IconPeople />
              Cast
            </StyledNavLink>
            <StyledNavLink to="reviews">
              <IconReviews />
              Reviews
            </StyledNavLink>
          </div>
          <BackLink to={backLinkHref || '/'} />
        </Links>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <Toaster />
      </section>
    </>
  );
};

export default MovieDetails;
