import {
  GETDATALOADING,
  GETDATASUCCESS,
  GETDATAERROR,
  GETSUGGESTIONSSUCCESS
} from "../actionTypes";
const init_state = {
  data: null,
  suggestions: [],
  loading: false,
  error: false,
  errorMessage: null
};
export const dataReducer = (state = init_state, { type, payload }) => {
  switch (type) {
    case GETDATASUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload
      };
    case GETSUGGESTIONSSUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        suggestions: payload
      };
    case GETDATAERROR:
      return {
        ...state,
        data: null,
        loading: false,
        error: true,
        errorMessage: payload
      };
    case GETDATALOADING:
      return {
        ...state,
        data: null,
        loading: true,
        error: false,
        errorMessage: ""
      };

    default:
      return state;
  }
};
