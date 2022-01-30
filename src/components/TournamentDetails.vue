<template>
    <div>
        <p>{{tournament.title}}</p>
    </div>
</template>

<script>
export default {
    computed: {
        tournament() {
            return this.$store.state.currentTournament
        }
    },

    props: {
        id: {
            type: Number,
            required: true
        }
    },

    created() {
        this.$store.dispatch('fetchTournamentById', this.id)
    }
}
</script>