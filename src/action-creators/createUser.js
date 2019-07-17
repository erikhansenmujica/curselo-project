import { CREATE_USER } from "../action-creators/constants";

export const createUser = user => {
  return {
    type: CREATE_USER,
    user
  };
};
