import { USERLOADING, USERSUCCESS, USERERROR } from "../actionTypes";
const init_state = {
  userMessage: null,
  loading: false,
  error: false,
  errorMessage: null
};
export const userReducer = (state = init_state, { type, payload }) => {
  switch (type) {
    case USERSUCCESS:
      console.log(payload);
      return {
        ...state,
        loading: false,
        error: false,
        userMessage: payload
      };
    case USERERROR:
      return {
        ...state,
        userMesaage: null,
        loading: false,
        error: true,
        errorMessage: payload
      };
    case USERLOADING:
      return {
        ...state,
        userMesaage: null,
        loading: true,
        error: false,
        errorMessage: ""
      };
    default:
      return state;
  }
};
