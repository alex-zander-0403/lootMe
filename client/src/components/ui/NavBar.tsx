import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { logoutThunk } from '../../redux/auth/authAsyncThunk';

export default function NavBar(): JSX.Element {
  //
  const user = useAppSelector((store) => store.auth.user);
  const dispatch = useAppDispatch();
  //
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LootMe!
          </Typography>

          {user.status !== 'logged' && (
            <>
              <NavLink className="nav-link" to="/login">
                Войти
              </NavLink>
              <NavLink className="nav-link" to="/auth">
                Регистрация
              </NavLink>
            </>
          )}

          {user.status === 'logged' && (
            <>
              <NavLink className="nav-link" to="/">
                {user.username}
              </NavLink>
              <NavLink onClick={() => void dispatch(logoutThunk())} className="nav-link" to="/">
                Выход
              </NavLink>
            </>
          )}

          {/* <Button href="/login" color="inherit">
            Войти
          </Button>
          <Button href="/auth" color="inherit">
            Регистрация
          </Button>
          <Button href="/" color="inherit">
            Выход
          </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
