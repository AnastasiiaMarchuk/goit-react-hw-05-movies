import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

const MainLayout = () => {
  return (
    <header>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </header>
  );
};

export default MainLayout;
