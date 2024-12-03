import React from 'react';
import NavBar from './ui/NavBar';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { useAppSelector } from '../redux/hook';
import Loader from '../HOCs/Loader';

export default function Layout(): JSX.Element {
  //
  const status = useAppSelector((store) => store.auth.user.status);

  //
  return (
    <>
      <Loader isLoading={status === 'pending'}>
        <NavBar />
        <Container>
          <Outlet />
        </Container>
      </Loader>
    </>
  );
}
