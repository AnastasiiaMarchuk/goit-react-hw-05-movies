import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Loader } from '../../components/Loader/Loader';
import { getSearchedMovies } from '../../services/API';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { LoudMoreButton } from 'components/LoadMoreButton/LoudMoreButton';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;
    const fetchSearchedMovies = async () => {
      try {
        setLoading(true);
        const foundMovies = await getSearchedMovies(query, page);
        if (foundMovies.length === 0) {
          toast.error(
            'Sorry, no movies were found for your request. Enter a valid query'
          );
          return;
        }
        const movies = foundMovies.map(({ id, title, poster_path }) => ({
          id,
          title,
          poster_path,
        }));
        setMovies(prevMovies => [...prevMovies, ...movies]);
        setMore(movies.length === 20);
      } catch (error) {
        toast.error(
          'Oops, something went wrong. Please try reloading the page.'
        );
      } finally {
        setLoading(false);
      }
    };
    fetchSearchedMovies();
  }, [page, query]);

  const changeQuery = newQuery => {
    const nextParams = query === newQuery ? {} : { query: newQuery };
    setSearchParams(nextParams);
    setPage(1);
    setMovies([]);
    setMore(true);
    if (query === newQuery) {
      toast.error(
        `The movies for the query "${query}" have already been shown. Please enter a different query.`,
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
      return;
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <SearchBar handleSubmit={changeQuery} />
      {loading && <Loader />}
      <MoviesList movies={movies} />
      {movies.length > 0 && more && (
        <LoudMoreButton loadMore={handleLoadMore} />
      )}
    </div>
  );
};
