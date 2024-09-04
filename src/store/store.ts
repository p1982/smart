import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postSlice'
import usersReducer from './slices/usersSlice'

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store