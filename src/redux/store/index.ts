import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import UserListReducer from '../slices/userListSlice';

export const store = configureStore({
  reducer: {
    userList: UserListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
