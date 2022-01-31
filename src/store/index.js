import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import tournamentService from '@/api/services/tournamentService'
import participantService from '@/api/services/participantService'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    state: { // = data
        tournaments: [],
        participants: [],
        currentTournament: null,
        currentParticipant: null,
        tournamentsApiUrl: process.env.TOURNAMENTS_API,
        participantsApiUrl: process.env.PARTICIPANTS_API,
        rootApiUrl: process.env.ROOT_API

    }, 

    getters: { // = computed
        
    },
    
    actions: { // = methods
        async fetchTournaments({commit}) {
            const tournaments = await tournamentService.getTournamentsAsync();
            commit('setTournaments', tournaments)
        },

        async fetchTournamentById({commit}, id) {
            const tournament = await tournamentService.getTournamentAsync(id);
            commit('setCurrentTournament', tournament)
        },

        async fetchParticipants({commit}) {
            const participants = await participantService.getParticipantsAsync()
            commit('setParticipants', participants)
        },

        async fetchParticipantById({commit}, id) {
            const participant = await participantService.getParticipantAsync(id)
            commit('setCurrentParticipant', participant)
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