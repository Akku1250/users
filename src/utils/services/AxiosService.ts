import axios, { AxiosInstance, AxiosResponse } from 'axios';

const AxiosService: AxiosInstance = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: false,
});

const handleResponseFulfilled = (response: AxiosResponse<any, any>) => {
  if (response.data && typeof response.data === 'string') {
    try {
      return { ...response, data: JSON.parse(response.data) };
    } catch {
      return response;
    }
  }
  return response;
};

AxiosService.interceptors.response.use(handleResponseFulfilled);

export const get = (url: string): Promise<any> => {
  return AxiosService.get(url);
};

export const post = (url: string, payload: any): Promise<any> => {
  return AxiosService.post(url, payload);
};
