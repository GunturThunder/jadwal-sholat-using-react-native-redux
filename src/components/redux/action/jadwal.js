import axios from 'axios';

export const getAll = (data,ip) => {
    return {
        type: 'GET_JADWAL',
        payload: axios({
            method: "GET",
            url: `https://api.pray.zone/v2/times/day.json?ip=${ip}&date=${data}`
        })
    }
}