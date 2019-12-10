/**
 * TODO: 过于冗余,建议重构
 */
import axios from 'axios';
import api from '@/config/api';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = api;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);


// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    },
);


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params = '') {
    return new Promise((resolve, reject) => {
        axios.get(`${url}/${params}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            });
    });
}

/**
 * 封装delete方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function del(url, params = '') {
    return new Promise((resolve, reject) => {
        axios.delete(`${url}/${params}`)
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err);
            });
    });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.put(url, data)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            });
    });
}
