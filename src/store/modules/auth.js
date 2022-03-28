import AuthService from "../../services/authService";
import User from '../../models/user.js'

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true, registerSucc: false }, user }
  : { status: { loggedIn: false, registerSucc: false }, user: null };

export default {
  namespaced: true,
  state: initialState,

  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        response => {
          if (response.data.code === "200") {
            commit("loginSuccess", response);
            return Promise.resolve(response.data);
          } else {
            commit("loginFailure");
            return Promise.reject(response.data);
          }
        },
        error => {
          commit("loginFailure");
          console.log("loginFailure");
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit("logout");
    },
    register({ commit }, user) {
      console.log(user);
      return AuthService.register(user).then(
        response => {
          if (response.data.code === "200") {
            commit("registerSuccess");
            return Promise.resolve(response.data);
          } else {
            commit("registerFailure");
            console.log("registerFailure");
            return Promise.reject(response.data);
          }
        },
        error => {
          commit("registerFailure");
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    loginSuccess(state, response) {
      let user = new User('','')
      user.userId = response.data.data.userId
      user.identity = response.data.data.identity
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
      state.status.registerSucc = true;
      // this.$router.push('/registerSuccess');
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  },

  getters: {
    getLoggedIn: state => {
      return state.status.loggedIn;
    }
  }
};
