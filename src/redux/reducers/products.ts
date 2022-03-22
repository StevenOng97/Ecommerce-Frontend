import { Constants } from "../../constants/constant";

const initialState = {
  isLoading: null,
  products: [],
  productsErr: null,

  product: null,
  productErr: null,
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

    //Single Product
    case Constants.FETCH_PRODUCT:
      return {
        ...state,
        isLoading: true,
        product: null,
        productErr: null,
      };

    case Constants.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        productErr: null,
        isLoading: false,
      };

    case Constants.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        product: null,
        productErr: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
