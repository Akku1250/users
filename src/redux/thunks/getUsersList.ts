import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../utils/services/AxiosService';
import IUserListDto from '../../utils/interfaces/dtos/IUserListDto';
import IUser from '../../utils/interfaces/IUsers';
import { setUsers } from '../actions/setUsers';

export const getUsersList = createAsyncThunk('userlist/getUsersList', async (_, thunkAPI) => {
  try {
    const url: string = '/users?page=2';
    const response: any = await get(url);

    const userList: IUserListDto = response && response.data ? response.data : null;
    let users: IUser[] | null = null;

    if (userList) {
      users = userList.data;
      thunkAPI.dispatch(setUsers(users));
    }

    return users;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
