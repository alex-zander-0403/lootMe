import { configureStore } from '@reduxjs/toolkit';
import boxReducer from './boxes/boxSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    boxes: boxReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type StoreType = typeof store