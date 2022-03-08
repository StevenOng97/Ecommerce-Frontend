import { Constants } from "../../constants/constant";

const initialState = {
  isLoading: null,
  products: [],
  productsErr: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Constants.FETCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
        products: [],
        productsErr: null,
      };

    case Constants.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        productsErr: null,
        isLoading: false,
      };

    case Constants.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        productsErr: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
