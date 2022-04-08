import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuex from "vuex";
import { authHeader } from "@/helpers/auth-header";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

const loginApi = process.env.LOGIN_API;

export default {
  async login(username, password) {
    return await axios
      .post(loginApi, { username, password })
      .then(this.handleResponse)
      .then(user => {
        // login successful if there's a jwt token in the response
        if (user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("user", JSON.stringify(user));
          axios.defaults.headers.common["Authorization"] = authHeader();
        }

        return user;
      });
  },

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("user");
  },

  handleResponse(response) {
    const data = response.data;
    if (!response.status === "200") {
      
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  }
};
