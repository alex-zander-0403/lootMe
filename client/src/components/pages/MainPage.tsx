import React from 'react';
import BoxCard from '../ui/BoxCard';
import useBoxes from '../../hooks/useBoxes';
import { Button, Stack } from '@mui/material';
import AddBox from '../ui/AddBox';

export default function MainPage(): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { boxes } = useBoxes();

  console.log(open);

  //
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Добавить новый лутбокс 1</Button>
      <Button onClick={() => setOpen((prev) => !prev)}>Добавить новый лутбокс 2</Button>
      <AddBox open={open} setOpen={setOpen} />

      <Stack className="cardsbox" direction="row" spacing={2}>
        {boxes.map((el) => (
          <BoxCard key={el.id} box={el} />
        ))}
      </Stack>
    </>
  );
}
