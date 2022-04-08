import userService from '@/api/services/userService.js'
import router from '@/router/index'

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
    ? { status: { loggedIn: true }, user }
    : { status: {}, user: null };


export default {
    namespaced: true,

    state: initialState,

    actions: {
        async login({ dispatch, commit }, { username, password }) {
            commit('loginRequest', { username });
            await userService.login(username, password)
                .then(
                    user => {
                        console.log('success')
                        commit('loginSuccess', user);
                        router.push('/');
                    },
                    error => {
                        console.log("error")
                        commit('loginFailure', error);
                        // dispatch('alert/error', error, { root: true });
                    }
                );
        },
        logout({ commit }) {
            userService.logout();
            commit('logout');
        }
    },

    mutations: {
        loginRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        loginSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        loginFailure(state) {
            state.status = {};
            state.user = null;
        },
        logout(state) {
            state.status = {};
            state.user = null;
        }
    }
}