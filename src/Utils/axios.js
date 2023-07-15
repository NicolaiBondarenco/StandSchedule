import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://81.28.6.151/api',
})

export default instance
