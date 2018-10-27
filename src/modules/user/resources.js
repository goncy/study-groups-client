import axios from "axios";

const URL = "http://localhost:8888/users";

export default {
  login: ({email, password}) =>
    axios(`${URL}?password_like=${password}&email_like=${email}`),
  update: data =>
    axios({
      data,
      url: URL,
      method: "PATCH",
    }),
};
