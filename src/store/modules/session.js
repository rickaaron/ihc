import * as types from '../types';
import JWT from "jsonwebtoken";


const state = {
  session: {
    id: null,
  }
};

const getters = {
  [types.SESSION]: state => {
    return state.session;
  },
};

const mutations = {

  [types.MUTATE_SET_SESSION]: (state) => {
    // console.log( ' MUTATE_SET_SESSION ');
    if (localStorage.getItem("token")) {
      try {
        let session_temp = JWT.decode(localStorage.getItem("token"));
        let time_temp = new Date().getTime() / 1000;
        // console.log( time_temp );
        // console.log( session_temp.exp );
        if (session_temp.exp > time_temp) {
          state.session = session_temp;
        } else {
          localStorage.removeItem('token');
        }
      } catch (e) {}
    }

  },

  [types.MUTATE_UPDATE_SESSION]: (state, payload) => {
    localStorage.setItem("token", payload.token);
    state.session = JWT.decode(payload.token);
  },
  [types.MUTATE_UPDATE_SESSION]: (state, payload) => {
    localStorage.setItem("token", payload.token);
    state.session = JWT.decode(payload.token);
  },
  [types.MUTATE_DELETE_SESSION]: (state, payload) => {
    localStorage.removeItem("token");
    state.session = {
      id: null,
    }
  },
};

const actions = {


};

export default {
  state,
  mutations,
  actions,
  getters
}
