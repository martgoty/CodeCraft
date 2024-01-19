import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://658a813aba789a962237315f.mockapi.io/'
})


// instance.interceptors.request.use((config) => {
//     return config
// })

export default instance