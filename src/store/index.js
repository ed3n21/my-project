import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: { // = data
        tournaments: [],
        participants: [],
        currentTournament: null,
        currentParticipant: null
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
        },

        fetchParticipants(context) {
            axios
                .get('http://localhost:62542/api/participants')
                .then(response => context.commit('setParticipants', response.data));
        },

        fetchParticipantById(context, id) {
            axios
                .get('http://localhost:62542/api/participants/'+ id)
                .then(response => context.commit('setCurrentParticipant', response.data));
        }
    },

    mutations: { 
        setTournaments(state, tournaments) {
            state.tournaments = tournaments;
        },

        setCurrentTournament(state, tournament) {
            state.currentTournament = tournament;
        },

        setParticipants(state, participants) {
            state.participants = participants;
        },

        setCurrentParticipant(state, participant) {
            state.currentParticipant = participant;
        }
    }
})