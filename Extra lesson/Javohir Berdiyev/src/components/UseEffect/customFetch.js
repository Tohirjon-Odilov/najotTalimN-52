export const customFetch = ({ param = 1 }) => {
  return fetch(`https://reqres.in/api/users?page=${param}`)
    .then((response) => response.json())
    .catch((err) => new Error(err));
};
