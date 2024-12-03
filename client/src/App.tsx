import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import OneBoxPage from './components/pages/OneBoxPage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import { useAppDispatch } from './redux/hook';
import { checkUserThunk } from './redux/auth/authAsyncThunk';

//
function App(): React.JSX.Element {
  //
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(checkUserThunk());
  }, []);
  //
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/boxes/:id', element: <OneBoxPage /> },

        //
        { path: '/auth', element: <SignUpPage /> },
        { path: '/login', element: <LoginPage /> },
      ],
    },
  ]);
  //

  return <RouterProvider router={router} />;
}

export default App;
