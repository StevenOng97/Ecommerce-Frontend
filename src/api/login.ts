import axiosClient from './axiosClient';

interface ILogin {
  username: string;
  password: string;
}

const loginApi = {
  login: (params: ILogin) => {
    const url = '/users/login';
    return axiosClient.post(url, params);
  },
};

export default loginApi;
