import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: { // = data
        tournaments: [],
        currentTournament: null
    },

    getters: { // = computed
        
    },

    actions: { // = methods
        fetchTournaments(context) {
            axios
                .get('http://localhost:62542/api/tournaments')
                .then(response => context.commit('setTournaments', response.data));
        },

        fetchTournamentById(context, id) {
            axios
                .get('http://localhost:62542/api/tournaments/'+ id)
                .then(response => context.commit('setCurrentTournament', response.data));
        }
    },

    mutations: { 
        setTournaments(state, tournaments) {
            state.tournaments = tournaments;
        },

        setCurrentTournament(state, tournament) {
            state.currentTournament = tournament;
        },
    }
})