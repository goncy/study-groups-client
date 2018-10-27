import axios from "axios";

const URL = "http://localhost:8888/groups";

export default {
  dogs: {
    search: criteria => axios(`${URL}?name_like=${criteria}`),
    create: data =>
      axios({
        data,
        url: URL,
        method: "POST",
      }),
    update: data =>
      axios({
        data,
        url: URL,
        method: "PATCH",
      }),
  },
};
