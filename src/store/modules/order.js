import { fetchList, fetchOrder } from "@/api/order";

const state = {
  listOrders: [],
  total: 0
};

const mutations = {
  SET_LIST_ORDERS: (state, data) => {
    state.listOrders = data;
  },
  SET_TOTAL_ORDERS: (state, data) => {
    state.total = data;
  }
};

const actions = {
  fetchListOrder({ commit }, query) {
    return new Promise((resolve, reject) => {
      fetchList(query)
        .then(response => {
          commit("SET_LIST_ORDERS", response.data);
          commit("SET_TOTAL_ORDERS", parseInt(response.headers["total"]));
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchOrderDetail({ commit }, id) {
    return new Promise((resolve, reject) => {
      fetchOrder(id)
        .then(response => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

const order = {
  state,
  mutations,
  actions,
  getters: {
    listOrders: state => state.listOrders,
    totalOrders: state => state.total
  }
};

export default order;
