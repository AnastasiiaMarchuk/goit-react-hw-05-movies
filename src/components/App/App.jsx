import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Movies } from '../../pages/Movies/Movies';
import { MainLayout } from 'layouts/MainLayout';
import { MovieDetails } from '../../pages/MovieDetails/MovieDetails';
import { Reviews } from '../Reviews/Reviews';
import { Cast } from '../Cast/Cast';
import { Background, Container } from './App.styled';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <div>
      <Container>
        <Background />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="/:movieId" element={<MovieDetails />}>
              <Route path="*" element={<Home />} />
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
        <Toaster />
      </Container>
    </div>
  );
};
