import { Constants } from '../../constants/constant';

const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Constants.OPEN_MODAL:
      return {
        isOpen: true,
      };

    case Constants.CLOSE_MODAL:
      return {
        isOpen: false,
      };

    default:
      return state;
  }
};

export default reducer;
