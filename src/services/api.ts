import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.0.190:19000'
})

export default api