import axios from 'axios'

export const register = newUser => {
  return axios
    .post("users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      user_id: newUser.user_id,
      password: newUser.password,
    })
    .then((response) => {
      console.log("Registered");
    });
}

export const login = user => {
  return axios
    .post("users/login", {
      user_id: user.user_id,
      password: user.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
