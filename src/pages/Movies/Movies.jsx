import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { getSearchedMovies } from '../../services/API';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { LoudMoreButton } from 'components/LoadMoreButton/LoudMoreButton';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [more, setMore] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');
  const page = searchParams.get('page') || '1';

  useEffect(() => {
    if (!query) return;
    const fetchSearchedMovies = async () => {
      try {
        const foundMovies = await getSearchedMovies(query, page);
        if (foundMovies.length === 0) {
          toast.error(
            'Oops, something went wrong. Please try reloading the page.'
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
      }
    };
    fetchSearchedMovies();
  }, [page, query]);

  const changeQuery = newQuery => {
    if (query === newQuery) {
      toast.error(
        `The movies for the query "${query}" have already been shown. Please enter a different query.`
      );
      return;
    }

    navigate(`/movies?query=${newQuery}&page=1`);
  };

  const handleLoadMore = () => {
    const nextPage = parseInt(page) + 1;
    navigate(`/movies?query=${query}&page=${nextPage}`);
  };

  return (
    <div>
      <SearchBar handleSubmit={changeQuery} />
      <MoviesList movies={movies} />
      {movies.length > 0 && more && (
        <LoudMoreButton loadMore={handleLoadMore} />
      )}
      <Toaster />
    </div>
  );
};

export default Movies;
