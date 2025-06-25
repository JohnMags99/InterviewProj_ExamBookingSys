import axiosLib from 'axios'
import Cookies from 'js-cookie'

const axios = axiosLib.create({
    baseURL: "http://localhost:8000",
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
    },
})

axios.defaults.withCredentials  = true // allow sending cookies

axios.interceptors.request.use(async (config) => {
    if ((config.method as string).toLowerCase() !== 'get') {
        await axios.get('/api/csrf-cookie').then()
        config.headers['X-XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN')
    }

    return config
})

export default axios