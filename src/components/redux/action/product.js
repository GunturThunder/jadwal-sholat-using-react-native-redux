import axios from 'axios';
import {REACT_APP_API} from 'react-native-dotenv'

// export const pagination = (data) => {
//     return {
//         type: 'GET_PAGINATION',
//         payload: axios({
//             method: "GET",
//             url: process.env.REACT_APP_URL + `product?limit=6&page=${data}`,
//             headers: {
//                 authorization: localStorage.getItem('token'),
//                 "user-id": localStorage.getItem('user-id')
//             }
//         })
//     }
// }

export const getAll = () => {
    return {
        type: 'GET_JADWAL',
        payload: axios({
            method: "GET",
            url: process.env.REACT_APP_URL + ''
        })
    }
}