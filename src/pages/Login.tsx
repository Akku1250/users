import React, { useState } from 'react';
import { post } from '../utils/services/AxiosService';
import { AxiosResponse } from 'axios';
import IUserLogin from '../utils/interfaces/IUserLogin';
import { useUserUpdate } from '../utils/providers/AuthenticationProvider';
import snackbar from '../utils/helpers/snackbar/snackbar';
import IError from '../utils/interfaces/IError';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Input, Wrapper } from '../components/styled';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const setUser: React.Dispatch<React.SetStateAction<IUserLogin | null>> = useUserUpdate();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const url: string = '/login';
    await post(
      url,
      JSON.stringify({
        email: email,
        password: password,
      }),
    )
      .then((res: AxiosResponse) => {
        const data: IUserLogin = res && res.data ? res.data : null;
        setUser(data);
        setEmail('');
        setPassword('');
        snackbar.notifySuccess('Logged In', 3000);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        const data: IError = err.response?.data;
        if (data) {
          snackbar.notifyError(data.error as string, 3000);
        }
      });
  };

  return (
    <Wrapper
      setFlexDirectionColumn={true}
      setAlignItemCenter={true}
    >
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          onChange={handleEmail}
          autoComplete="false"
          value={email}
          required
        />

        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          onChange={handlePassword}
          autoComplete="false"
          value={password}
          isPasswordInput={true}
        />
        <button>Login</button>
      </Form>
    </Wrapper>
  );
};

export default Login;
