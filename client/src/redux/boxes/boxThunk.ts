import { createAsyncThunk } from '@reduxjs/toolkit';
import type { BoxTypeDb, BoxTypeForm } from '../../types/boxTypes';
import boxService from '../../services/boxService';

//
export const getBoxesThunk = createAsyncThunk<BoxTypeDb[]>('boxes/getAll', async () => {
  const boxesArray = await boxService.getBoxes(); // getBoxes() из boxService.ts
  return boxesArray;
});

// <PostTypeDb(что ретернится), PostTypeForm(что отправляем)>
export const addBoxThunk = createAsyncThunk<BoxTypeDb, BoxTypeForm>(
  'boxes/addPost',
  async (myFormData) => {
    const newBox = await boxService.addBox(myFormData); // addPost() из postService.ts
    return newBox;
  },
);

export const deleteBoxThunk = createAsyncThunk<BoxTypeDb['id'], BoxTypeDb['id']>(
  'boxes/delete',
  async (id) => {
    await boxService.deleteBox(id); // deletePost() из postService.ts
    return id;
  },
);
