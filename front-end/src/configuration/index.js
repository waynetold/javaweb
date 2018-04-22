import axios from 'axios'

const env = process.env.NODE_ENV

const host = env === 'production' ? '' : 'http://localhost:8000'

const service = axios.create({
    baseURL: host, // host
    timeout: 5000, // timeout
    withCredentials: true // allow cookie
})

export { service as axios }
