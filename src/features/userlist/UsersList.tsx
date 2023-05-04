import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import IUser from '../../utils/interfaces/IUsers';
import { getUsersList } from '../../redux/thunks/getUsersList';
import snackbar from '../../utils/helpers/snackbar';
import IError from '../../utils/interfaces/IError';
import './UsersList.scss';

function UsersList() {
  const users: IUser[] | null = useAppSelector((state) => state.userList.users);
  const dispatch = useAppDispatch();

  const fetchUserList = async (): Promise<void> => {
    await dispatch(getUsersList())
      .unwrap()
      .then(() => {
        snackbar.notifySuccess('Loading Complete', 3000);
        return;
      })
      .catch((err) => {
        const data: IError = err.response?.data;
        if (data) {
          snackbar.notifyError(data.error as string, 3000);
        }
      });
  };

  useEffect(() => {
    if (users === null) {
      fetchUserList();
    }
  });

  return (
    <div className="userlist-container">
      {users === null ? (
        <p>loading...</p>
      ) : (
        <div className="grid">
          {users.map((user) => {
            return (
              <div
                className="userItem-container"
                key={user.id}
              >
                <div>
                  {
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img
                      className="img-size"
                      src={`${user.avatar}`}
                      alt={`${user.first_name} ${user.last_name} image`}
                    />
                  }
                </div>
                <div>
                  <p className="name">{`${user.first_name} ${user.last_name}`}</p>
                  {
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a href="#">{`${user.email}`}</a>
                  }
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default UsersList;
