// import axios from 'axios';

// const instance = axios.create({
//     baseURL:'https://60ae432680a61f0017332d65.mockapi.io/api/v1/'
// });

// instance.interceptors.request.use(
//     async config => {
//         const token = '';
//         config.headers = {
//             'Authorization': `Bearer ${token}`,
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }
//         return config;
//     },
//     error => { return Promise.reject(err)}
// );

// instance.interceptors.response.use(
//     res => res.data,
//     err => { return Promise.reject(err)}
// );

// export default instance;

const fetchAPI = async (url, option) => {
    const response = await fetch(url, option)
    return response.json();
}
export const getAPI = async (url) => {
    const option = {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
    }
    return await fetchAPI(url, option);
}
export const postAPI = async (data, url) => {
    const option = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return await fetchAPI(url, option)
}

