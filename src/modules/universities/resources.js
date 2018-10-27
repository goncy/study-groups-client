import axios from "axios";

const URL = "http://localhost:8888/universities";

export default {
  fetch: () => axios(URL).then(result => result.data),
};
