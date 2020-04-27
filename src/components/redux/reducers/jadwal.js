const initialState = {
    dayJadwal: [],
    isLoading:true
}

const jadwal = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_JADWAL_PENDING':
            return {
                ...state
            }
        case 'GET_JADWAL_REJECTED':
            return {
                ...state
            }
        case 'GET_JADWAL_FULFILLED':
            // console.log('action.payload.data.results.datetime',action.payload.data.results.datetime[0].times)
            return {
                ...state,
                   dayJadwal: action.payload.data.results.datetime[0].times,
                   isLoading:false
            }
        default:
            return state;
    }
}

export default jadwal;