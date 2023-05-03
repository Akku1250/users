import { createSlice } from '@reduxjs/toolkit';
import UserListInitalState from '../states/UserListInitalState';
import { setUsers } from '../actions/setUsers';

const initialState = UserListInitalState;

export const slice = createSlice({
  name: 'userlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUsers, (state, action) => {
      const payload = action.payload;
      state.users = payload;
    });
  },
});

const UserListReducer = slice.reducer;

export default UserListReducer;
