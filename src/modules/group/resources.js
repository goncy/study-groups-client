import axios from "axios";

const URL = "http://localhost:8888/groups";

export default {
  search: (university, assignment) =>
    axios(
      `${URL}?university_like=${university}&assignment_like=${assignment}`
    ).then(resp => resp.data),
  fetch: id => axios(`${URL}/${id}`),
  create: data =>
    axios({
      data,
      url: URL,
      method: "POST",
    }).then(resp => resp.data),
  update: data =>
    axios({
      data,
      url: URL,
      method: "PATCH",
    }),
};
