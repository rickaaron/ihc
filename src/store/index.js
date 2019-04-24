    
import Vue from 'vue';
import Vuex from 'vuex';

import session from './modules/session' 
import * as types from './types';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        search_text: '',
    },
    getters: {
        [types.SEARCHTEXT]: state => {
            return state.search_text;
        },
    },
    mutations: {
        [types.MUTATE_SET_SEARCHTEXT]: (state, payload) => {
            state.search_text = payload;
        },
    },
    modules: {
        session,
    }

});