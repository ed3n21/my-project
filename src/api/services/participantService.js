import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const participantsApiUrl = process.env.PARTICIPANTS_API

export default {
    async getParticipantsAsync() {
        try {
            const response = await axios.get(participantsApiUrl);
            return response.data;
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    },

    async getParticipantAsync(id) {
        try {
            const response = await axios.get(participantsApiUrl + '/' + id);
            return response.data;
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    }
}