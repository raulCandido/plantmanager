import axios from "axios"

const apiFakeFace = axios.create({
    baseURL: "https://fakeface.rest"
})

export default apiFakeFace