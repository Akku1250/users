import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store/hooks';
import IUser from '../utils/interfaces/IUsers';
import { getUsersList } from '../redux/thunks/getUsersList';
import snackbar from '../utils/helpers/snackbar/snackbar';
import IError from '../utils/services/interfaces/IError';
import { Flex, Grid, Img, Name, Wrapper } from '../components/styled';

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
    <Wrapper>
      {users === null ? (
        <p>loading...</p>
      ) : (
        <Grid>
          {users.map((user) => {
            return (
              <Flex key={user.id}>
                <div>
                  {
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <Img
                      src={`${user.avatar}`}
                      alt={`${user.first_name} ${user.last_name} image`}
                    />
                  }
                </div>
                <div>
                  <Name>{`${user.first_name} ${user.last_name}`}</Name>
                  {
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a href="#">{`${user.email}`}</a>
                  }
                </div>
              </Flex>
            );
          })}
        </Grid>
      )}
    </Wrapper>
  );
}

export default UsersList;
