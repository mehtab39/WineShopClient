import { USERLOADING, USERSUCCESS, USERERROR } from "../actionTypes";

export const usersuccess = (user) => {
  return {
    type: USERSUCCESS,
    payload: user
  };
};
export const usererror = (err) => {
  return {
    type: USERERROR,
    payload: err
  };
};
export const userloading = ($) => {
  return {
    type: USERLOADING
  };
};

export const validateAccount = (data) => (dispatch) => {
  dispatch(userloading());
  const { email, name, mobile, age, address } = data;
  if (email.length < 5) dispatch(usererror("enter valid email"));
  else if (name.length < 3) dispatch(usererror("enter valid name"));
  else if (typeof +mobile == NaN || mobile.toString().length !== 10)
    dispatch(usererror("enter valid mobile"));
  else if (age > 120) dispatch(usererror("enter valid age"));
  else if (age < 18) dispatch(usererror("You are not allowed to buy liquor"));
  else if (address.length < 5) dispatch(usererror("enter valid address"));
  else dispatch(usersuccess("order completed"));
};
