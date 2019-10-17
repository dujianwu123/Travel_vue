import axios from 'axios';

class AjaxRequest {
  constructor() {
    this.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/';
    this.timeout = 2000;
  }

  request(config) {
    const instance = axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout,
    });

    instance.interceptors.request.use((config) => {
      config.headers.Authorization = localStorage.getItem('token');
      return config;
    }, err => Promise.reject(err));

    instance.interceptors.response.use(res => res.data, err => Promise.reject(err));

    return instance(config);
  }
}


// // 每个请求的拦截器方法可能不一样
// let instance = axios.create({
//   baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/'
// });

// // 请求拦截 会在请求的时候拦截当前的请求
// instance.interceptors.request.use((config) => {
//   console.log(1);
//   return config;
// });

// instance.interceptors.request.use((config) => {
//   console.log(2);
//   return config;
// });

export default new AjaxRequest();
