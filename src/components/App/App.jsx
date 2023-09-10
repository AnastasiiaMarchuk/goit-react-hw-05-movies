import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Background, Container } from './App.styled';
import MainLayout from '../Layout/MainLayout';

const Home = lazy(() => import('../../pages/Home/Home'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Cast = lazy(() => import('../Cast/Cast'));

export const App = () => {
  return (
    <div>
      <Container>
        <Background />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </div>
  );
};
