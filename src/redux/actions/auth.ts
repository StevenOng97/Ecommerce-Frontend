import loginApi from '../../api/login';
import registerApi from '../../api/register';
import { Constants } from '../../constants/constant';

export const register = (data: any) => {
  return async (dispatch: any) => {
    dispatch({ type: Constants.REGISTER });

    try {
      const payload = await registerApi.register(data);

      dispatch({ type: Constants.REGISTER_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: Constants.REGISTER_FAILURE, error });
    }
  };
};

export const login = (data: any) => {
  return async (dispatch: any) => {
    dispatch({ type: Constants.LOGIN });

    try {
      const payload: any = await loginApi.login(data);
      if (payload.token) {
        localStorage.setItem('authToken', payload.token);
      }
      dispatch({ type: Constants.LOGIN_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: Constants.LOGIN_FAILURE, error });
    }
  };
};

export const authenticated = (data: any) => {
  return async (dispatch: any) => {
    dispatch({ type: Constants.AUTHENTICATED, payload: data });
  };
};

export const logOut = () => {
  return async (dispatch: any) => {
    dispatch({ type: Constants.LOGOUT });
    setTimeout(() => {
      localStorage.removeItem('authToken');
      dispatch({ type: Constants.LOGOUT_SUCCESS });
    }, 2000);
  };
};
