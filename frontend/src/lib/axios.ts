import axios from "axios"

const BASE_URL = "https://be-concerthubs.vercel.app/api"

export default axios.create({
    baseURL: BASE_URL,
})