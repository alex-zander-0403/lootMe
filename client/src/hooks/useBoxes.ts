import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { BoxTypeDb, BoxTypeForm } from '../types/boxTypes';
import { addBoxThunk, deleteBoxThunk, getBoxesThunk } from '../redux/boxes/boxThunk';

type UseBoxesTypes = {
  boxes: BoxTypeDb[];
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteHandler: (id: BoxTypeDb['id']) => void;
};

// получение всех boxes
export default function useBoxes(): UseBoxesTypes {
  const boxes = useAppSelector((store) => store.boxes.boxes);
  const dispatch = useAppDispatch();

  // вызов всех boxes из boxThunk
  useEffect(() => {
    void dispatch(getBoxesThunk());
  }, []);

  // добавление нового box
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    const dataForm = Object.fromEntries(new FormData(e.currentTarget)); //as BoxTypeForm;
    void dispatch(addBoxThunk(dataForm));
  };

  // удаление box
  const deleteHandler = (id: BoxTypeDb['id']) => {
    void dispatch(deleteBoxThunk(id));
  };

  return { boxes, submitHandler, deleteHandler };
}
