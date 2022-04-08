import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import tournaments from './modules/tournaments'
import participants from './modules/participants'
import authentication from './modules/authentication';


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
    modules: {
        tournaments,
        participants,
        authentication
    },

    state: {
        rootApiUrl: process.env.ROOT_API
    }, 

    getters: {
        
    },
    
    actions: {

    },

    mutations: { 

    }
})