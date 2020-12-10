import axios from "axios";
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    return axios.get(baseUrl);
}
const create = (obj) => {
    return axios.post(baseUrl, obj);
}

const update = (id, obj) => {
    return axios.put(`${baseUrl}/${id}`, obj);
}

const deleteItem = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deleteItem };
