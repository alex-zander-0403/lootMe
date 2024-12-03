import React from 'react';
import Input from '@mui/material/Input';
import { Box, Button, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LoginPage(): JSX.Element {
  //
  const { loginHandler } = useAuth();

  //
  return (
    <>
      <Box onSubmit={loginHandler} sx={style} component="form" noValidate autoComplete="off">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Введите данные для входа
        </Typography>
        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

        {/* <TextField
          name="username"
          id="outlined-basic"
          label="Имя пользователя"
          variant="outlined"
        /> */}
        <TextField name="email" id="outlined-basic" label="email" variant="outlined" />
        <TextField name="password" id="outlined-basic" label="пароль" variant="outlined" />

        <Button type="submit" color="inherit">
          Войти
        </Button>
        {/* <Button href="/" color="inherit">
          Назад
        </Button> */}
        <NavLink className="nav-link" to="/">
          Назад
        </NavLink>
      </Box>
    </>
  );
}
