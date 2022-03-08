import {
  GETDATALOADING,
  GETDATASUCCESS,
  GETDATAERROR,
  GETSUGGESTIONSSUCCESS
} from "../actionTypes";
import {
  getLocalStorage,
  pushLocalStorage,
  removeLocalStorage,
  ToLocalStorage,
  removeLocalStorageById
} from "../../utils/localStorage";
import axios from "axios";
const baseURL = axios.create({
  baseURL: "http://localhost:2550"
});

export const getsuggestionssuccess = (data) => {
  console.log("data:", data);
  return {
    type: GETSUGGESTIONSSUCCESS,
    payload: data
  };
};
export const getdatasuccess = (data) => {
  console.log("data:", data);
  return {
    type: GETDATASUCCESS,
    payload: data
  };
};
export const getdataerror = (err) => {
  return {
    type: GETDATAERROR,
    payload: err
  };
};
export const getdataloading = ($) => {
  return {
    type: GETDATALOADING
  };
};

export const fetchData = (order, page) => async (dispatch) => {
  dispatch(getdataloading());
  let sort = "asc";
  if (order) sort = "desc";
  try {
    await baseURL.get(`/wine?page=${page}&&sort=${sort}`).then((res) => {
      dispatch(getdatasuccess(res.data));
    });
  } catch (e) {
    dispatch(getdataerror(e.response));
  }
};

export const fetchSearhSuggestions = (search) => async (dispatch) => {
  dispatch(getdataloading());
  try {
    await baseURL.post(`/suggestions`, { search }).then((res) => {
      dispatch(getdatasuccess(res.data));
    });
  } catch (e) {
    dispatch(getdataerror(e.response));
  }
};

export const addDataToCart = (data) => async (dispatch) => {
  pushLocalStorage("cart", data);
};
export const getDataFromCart = (setData) => async (dispatch) => {
  const data = getLocalStorage("cart");
  setData(data);
};
export const getDataFromSave = (setData) => async (dispatch) => {
  const data = getLocalStorage("save");
  setData(data);
};
export const addDataToSave = (data) => async (dispatch) => {
  pushLocalStorage("save", data);
};
export const removeDataFromCart = (data) => async (dispatch) => {
  removeLocalStorageById("cart", data._id);
};
