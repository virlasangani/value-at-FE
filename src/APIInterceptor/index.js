import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL
const fetchApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

fetchApi.interceptors.response.use((respnse) => respnse?.data)

export default fetchApi;