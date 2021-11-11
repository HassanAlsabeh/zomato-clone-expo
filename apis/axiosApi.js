import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.3.152:8000/api',
})

