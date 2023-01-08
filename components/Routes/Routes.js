import { Dynamic, BrowserRouter, Routes, Route } from 'react-router-dom';

function BaseRoutes() {
  console.log('Routes');
  return (
    <Dynamic import={() => import('react-router-dom')}>
      {(ReactRouter) => {
        const { BrowserRouter, Routes, Route } = ReactRouter;
        return (
          <BrowserRouter>
            <Routes>
              {/* BASE ACTIONS */}
              {/* <Route index element={<HomePage />} /> */}
              {/* USERS ACTIONS */}

              {/* SITES ACTIONS */}
              {/* <SitesRoutes /> */}
            </Routes>
          </BrowserRouter>
        );
      }}
    </Dynamic>
  );
}

export default BaseRoutes;
