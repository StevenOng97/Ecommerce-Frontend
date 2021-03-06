import productApi from '../../api/productApi';
import { Constants } from '../../constants/constant';
import { handleModalState } from './modal';

export const fetchProducts = (queryString: any) => {
  return async (dispatch: any) => {
    dispatch({ type: Constants.FETCH_PRODUCTS });

    try {
      const payload = await productApi.getAll(queryString);

      dispatch({ type: Constants.FETCH_PRODUCTS_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: Constants.FETCH_PRODUCTS_FAILURE, error });
      handleModalState(true);
    }
  };
};

export const fetchProductsById = (id: any) => {
  return async (dispatch: any) => {
    dispatch({ type: Constants.FETCH_PRODUCT });

    try {
      const payload = await productApi.get(id);

      dispatch({ type: Constants.FETCH_PRODUCT_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: Constants.FETCH_PRODUCT_FAILURE, error });
    }
  };
};
