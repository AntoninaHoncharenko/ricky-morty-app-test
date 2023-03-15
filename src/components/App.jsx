import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { GlobalStyle } from 'GlobalStyles';

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const HeroDetails = lazy(() => import('../pages/HeroDetails/HeroDetails'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/:heroId" element={<HeroDetails />}></Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </div>
  );
};
