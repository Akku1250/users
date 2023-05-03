import { createAction } from '@reduxjs/toolkit';
import IUser from '../../utils/interfaces/IUsers';

export const setUsers = createAction<IUser[]>('userlist.SetUsers');
