import { fetchList, fetchUser } from "@/api/user";

const state = {
  listUsers: [],
  total: 0
};

const mutations = {
  SET_LIST_USERS: (state, data) => {
    state.listUsers = data;
  },
  SET_TOTAL_USERS: (state, data) => {
    state.total = data;
  }
};

const actions = {
  fetchListUser({ commit }, query) {
    return new Promise((resolve, reject) => {
      fetchList(query)
        .then(response => {
          commit("SET_LIST_USERS", response.data);
          commit("SET_TOTAL_USERS", parseInt(response.headers["total"]));
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchUserDetail({ commit }, id) {
    return new Promise((resolve, reject) => {
      fetchUser(id)
        .then(response => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

const user = {
  state,
  mutations,
  actions,
  getters: {
    listUsers: state => state.listUsers,
    totalUsers: state => state.total
  }
};

export default user;
