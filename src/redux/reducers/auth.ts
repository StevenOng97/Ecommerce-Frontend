import { Constants } from '../../constants/constant';

const initialState = {
  isLoading: null,
  isAuth: null,
  loginErr: null,
  registerSuccess: null,
  registerErr: null,
  token: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Constants.REGISTER:
      return {
        ...state,
        isLoading: true,
        registerSuccess: null,
        registerErr: null,
      };

    case Constants.REGISTER_SUCCESS:
      return {
        ...state,
        registerSuccess: true,
        registerErr: null,
        isLoading: false,
      };

    case Constants.REGISTER_FAILURE:
      return {
        ...state,
        registerSuccess: false,
        registerErr: action.error,
        isLoading: false,
      };

    case Constants.LOGIN:
      return {
        ...state,
        isLoading: true,
        isAuth: null,
        token: null,
        loginErr: null,
      };

    case Constants.LOGIN_SUCCESS:
      return {
        ...state,
        loginErr: null,
        isAuth: true,
        token: action.payload,
        isLoading: false,
      };

    case Constants.LOGIN_FAILURE:
      return {
        ...state,
        loginErr: action.error,
        isAuth: false,
        token: null,
        isLoading: false,
      };

    case Constants.AUTHENTICATED:
      return {
        ...state,
        isAuth: true,
        token: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
