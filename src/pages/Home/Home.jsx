import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/API';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Hero, Icon, StyledNavLink, Title } from './Home.styled';

import { LoudMoreButton } from 'components/LoadMoreButton/LoudMoreButton';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const movies = await getTrendingMovies(page);
        const trendingMovies = movies.map(({ id, title, poster_path }) => ({
          id,
          title,
          poster_path,
        }));
        setTrendingMovies(prevMovies => [...prevMovies, ...trendingMovies]);
        setMore(trendingMovies.length === 20);
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

    fetchTrendingMovies();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <section>
        <Hero>
          <Title>
            <h1>
              Guide to the <span>Movies World </span>
            </h1>
          </Title>
          <StyledNavLink to="/movies">
            <Icon />
            Choose What to Watch Next
          </StyledNavLink>
        </Hero>
      </section>
      <section>
        <h2>Trending movies</h2>
        <MoviesList movies={trendingMovies} />
        {trendingMovies.length > 0 && more && (
          <LoudMoreButton loadMore={handleLoadMore} />
        )}
        <Toaster />
      </section>
    </>
  );
};

export default Home;
