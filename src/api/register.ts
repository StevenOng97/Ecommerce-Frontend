import axiosClient from './axiosClient';

interface IRegister {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
}

const registerApi = {
  register: (params: IRegister) => {
    const url = '/users';
    return axiosClient.post(url, params);
  },
};

export default registerApi;
