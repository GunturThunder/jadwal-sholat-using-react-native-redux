import axios from 'axios';
// import {REACT_APP_API} from 'react-native-dotenv'

export const getAll = () => {
    return {
        type: 'GET_JADWAL',
        payload: axios({
            method: "GET",
            url: 'https://api.pray.zone/v2/times/day.json?city=bogor&date=2020-04-17'
        })
    }
}