import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: {
      type: 'all',
      status: '',
      search: '',
    },
    flights: [],
  },
  getters: {
    flights(state) {
      return state.flights
        .filter((flight) => {
          if ((state.filter.type === 'all') || (state.filter.type === flight.type) || ((state.filter.status === 'delay') && (state.filter.status === flight.status))) {
            return true;
          }
          return false;
        })
        .filter((flight) => {
          const { search } = state.filter;
          const arr = flight.airlineFlightNumber;
          const result = arr.filter(code => code.indexOf(search) > -1);

          return result.length > 0;
        });
    },
  },
  mutations: {
    updateFlights(state, list) {
      state.flights = list;
    },
    updateType(state, type) {
      state.filter.type = type;
    },
    updateStatus(state, status) {
      state.filter.status = status;
      if (status === 'delay') {
        state.filter.type = '';
      }
    },
    updateValue(state, value) {
      state.filter.search = value;
    },
  },
  actions: {
    fetchFlights({ commit }) {
      return axios.get('/api/flights.json').then((response) => {
        commit('updateFlights', response.data);
      }).catch((error) => {
        console.log(error);
        commit('updateFlights', []);
      });
    },
    changeFilter({ commit }, value) {
      return new Promise((resolve) => {
        commit('updateType', value.type);
        commit('updateStatus', value.status);
        resolve();
      });
    },
    changeValue({ commit }, value) {
      return new Promise((resolve) => {
        commit('updateValue', value);
        resolve();
      });
    },
  },
});
