import { listCustomers, bookRoom, getInfoCustomer, updateBookRoom, registerCustomer } from "@/api/customer.api";

export const state = {
  listCustomer: null,
};

export const getters = {
  listCustomer: state => state.listCustomer,
};

export const mutations = {
  setListCustomer(state, listCustomer) {
    state.listCustomer = listCustomer;
  },
};

export const actions = {

  registerCustomer({ commit }, payload) {
    return new Promise((resolve, reject) => {
      registerCustomer(payload)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  getListCustomer({ commit }, payload) {
    return new Promise((resolve, reject) => {
      listCustomers(payload)
        .then(response => {
          commit('setListCustomer', response.data);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  bookRoom({ commit }, payload) {
    return new Promise((resolve, reject) => {
      bookRoom(payload)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  getInfoCustomer({ commit }, id) {
    return new Promise((resolve, reject) => {
      getInfoCustomer(id)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },

  updateBookRoom({ commit }, id) {
    return new Promise((resolve, reject) => {
      updateBookRoom(id)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
