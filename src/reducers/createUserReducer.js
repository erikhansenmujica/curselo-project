import { CREATE_USER } from "../action-creators/constants";

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return Object.assign({}, state, { user: action.user });
    default:
      return state;
  }
};
