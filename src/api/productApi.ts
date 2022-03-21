import axiosClient from './axiosClient';

const productApi = {
  getAll: (params: string) => {
    const url = '/products';
    return axiosClient.get(url, { params });
  },

  get: (id: string) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;
