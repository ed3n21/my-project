import participantService from '@/api/services/participantService'

export default {
    namespaced: true,

    state: {
        items: [],
        currentParticipant: null,
        participantsApiUrl: process.env.PARTICIPANTS_API
    },

    actions: {
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
        setParticipants(state, participants) {
            state.items = participants;
        },

        setCurrentParticipant(state, participant) {
            state.currentParticipant = participant;
        }
    }
}