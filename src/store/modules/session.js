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
                // console.log(state.session);
            } catch (e) {
                // console.log(" Not Token", e);
            }
        }

    },
    
    [types.MUTATE_UPDATE_SESSION]: (state, payload) => {
        // console.log( ' MUTATE_UPDATE_SESSION ', payload );
        localStorage.setItem("token", payload.token);
        state.session = JWT.decode(payload.token);

    },


};

const actions = {
    // [types.]: ({ commit }, payload) => {
    //     commit(types.MUTATE_INCREMENT_COUNTER, payload);
    // },
    // [types.COUNTER_DECREMENT]: ({ commit }, payload) => {
    //     commit(types.MUTATE_DECREMENT_COUNTER, payload);
    // },
    // [types.COUNTER_INCREMENT_ASYNC]: ({commit}, payload) => {
    //     setTimeout(() => {
    //         commit(types.MUTATE_INCREMENT_COUNTER, payload.by);
    //     }, payload.duration);
    // },
    // [types.COUNTER_DECREMENT_ASYNC]: ({commit}, payload) => {
    //     setTimeout(() => {
    //         commit(types.MUTATE_DECREMENT_COUNTER, payload.by);
    //     }, payload.duration);
    // }
};

export default {
    state,
    mutations,
    actions,
    getters
}