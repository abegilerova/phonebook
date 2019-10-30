import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {

    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then((response) => response.data)
}

const deleteObject = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    //return request.then(response => response.data)
    return request.then(() => id)
}

export default {
    getAll: getAll,
    create: create,
    update: update,
    deleteObject: deleteObject
}