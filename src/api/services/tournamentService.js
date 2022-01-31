import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const tournamentsApiUrl = process.env.TOURNAMENTS_API

export default {
    async getTournamentsAsync() {
        try {
            const response = await axios.get(tournamentsApiUrl);
            return response.data;
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    },

    async getTournamentAsync(id) {
        try {
            const response = await axios.get(tournamentsApiUrl + '/' + id);
            return response.data;
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }
}