import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home/index';
import Popular from '../pages/Popular/index';
import Battle from '../pages/Battle/index';
import Nav from './navigation';
import Results from '../pages/Battle/Results';
import { FC, ReactElement } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'popular',
        element: <Popular />,
      },
      {
        path: 'battle',
        element: <Battle />,
      },
      {
        path: 'battle/results',
        element: <Results />,
      },
      {
        path: '*',
        element: <h2>Error</h2>,
      },
    ],
  },
]);

const App: FC = (): ReactElement => {
  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
