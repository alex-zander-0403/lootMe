import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import OneBoxPage from './components/pages/OneBoxPage';

//
function App(): React.JSX.Element {
  //
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/boxes/:id', element: <OneBoxPage /> },
      ],
    },
  ]);
  //

  return <RouterProvider router={router} />;
}

export default App;
