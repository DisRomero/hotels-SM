import data from './data.json';

export const getUsers = () => {
  return data.users;
};

export const getUserById = (id) => {
  return data.users.find((user) => user.id === id);
};