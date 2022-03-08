export const ToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const pushLocalStorage = (key, value) => {
  let data = JSON.parse(localStorage.getItem(key));
  if (data == undefined) data = [];
  data.push(value);
  localStorage.setItem(key, JSON.stringify(data));
};

export const removeLocalStorageById = (key, value) => {
  let data = JSON.parse(localStorage.getItem(key));
  if (data == undefined) return false;
  data = data.filter((el) => el._id != value);
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
export const clearLocalStorage = ($) => {
  localStorage.clear();
};
