import { Constants } from '../../constants/constant';

export const handleModalState = (isOpen: boolean) => {
  return async (dispatch: any) => {
    const actionType = isOpen ? Constants.OPEN_MODAL : Constants.CLOSE_MODAL;
    dispatch({ type: actionType });
  };
};
