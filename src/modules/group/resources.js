import axios from 'axios'

const URL = 'http://localhost:8888/groups'

export default {
  search: criteria => axios(`${URL}?name_like=${criteria}`),
  fetch: id => axios(`${URL}/${id}`),
  create: data =>
    axios({
      data,
      url: URL,
      method: 'POST',
    }),
  update: data =>
    axios({
      data,
      url: URL,
      method: 'PATCH',
    }),
}
