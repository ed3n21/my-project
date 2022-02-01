import tournamentService from '@/api/services/tournamentService'


export default {
    namespaced: true,

    state: {
        items: [],
        currentTournament: null,
        tournamentsApiUrl: process.env.TOURNAMENTS_API
    },

    actions: {
        async fetchTournaments({commit}) {
            const tournaments = await tournamentService.getTournamentsAsync();
            commit('setTournaments', tournaments)
        },

        async fetchTournamentById({commit}, id) {
            const tournament = await tournamentService.getTournamentAsync(id);
            commit('setCurrentTournament', tournament)
        }
    },

    mutations: {
        setTournaments(state, tournaments) {
            state.items = tournaments;
        },

        setCurrentTournament(state, tournament) {
            state.currentTournament = tournament;
        }
    }
}