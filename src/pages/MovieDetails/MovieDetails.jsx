import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getMovieInfos } from 'services/API';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import {
  IconPeople,
  IconReviews,
  Links,
  Section,
  StyledNavLink,
} from './MovieDetails.styled';
import { BackLink } from '../../components/BackLink/BackLink';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

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
          backdrop: movie.backdrop_path,
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
      <Section>
        <MovieInfo movieInfo={movieInfo} />
      </Section>
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
          <BackLink />
        </Links>
        <Outlet />
      </section>
    </>
  );
};
