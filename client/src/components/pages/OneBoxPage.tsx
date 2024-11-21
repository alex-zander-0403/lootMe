import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../../services/axiosInstance';
import { Button, CardContent, CardMedia, Typography } from '@mui/material';

export default function OneBoxPage(): JSX.Element {
  //
  const [box, setBox] = useState({ title: '', img: '', price: '', userId: '' });
  const { id } = useParams();

  //
  useEffect(() => {
    axiosInstance.get(`/boxes/${id}`).then((res) => setBox(res.data));
  }, []);

  //
  return (
    <>
      <CardContent>
        {/* <img src={box.img} alt={box.title} /> */}
        <CardMedia component="img" height="500" image={box.img} alt={box.title} />

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {box.title}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {box.price}
        </Typography>

        <Button variant="outlined">Купить</Button>

        <Button variant="outlined">
          <Link to={'/'}>Назад</Link>
        </Button>
      </CardContent>
    </>
  );
}
