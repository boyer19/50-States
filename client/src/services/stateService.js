import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },

    setVisited(stateName, visited) {
        // api/state/ ---state name----
        let requestData = {visited: visited }                                               // requestData vs data is clearer
        return axios.patch('/api/states/' + stateName, requestData).then( response => {
            return response.data
        })
    }
}