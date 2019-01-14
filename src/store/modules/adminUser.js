import { fetchList, fetchUser } from "@/api/adminUser";

const state = {
  listAdminUsers: [],
  total: 0
};

const mutations = {
  SET_LIST_ADMIN_USERS: (state, data) => {
    state.listAdminUsers = data;
  },
  SET_TOTAL_ADMIN_USERS: (state, data) => {
    state.total = data;
  }
};

const actions = {
  fetchListAdminUser({ commit }, query) {
    return new Promise((resolve, reject) => {
      fetchList(query)
        .then(response => {
          commit("SET_LIST_ADMIN_USERS", response.data);
          commit("SET_TOTAL_ADMIN_USERS", parseInt(response.headers["total"]));
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchAdminUserDetail({ commit }, id) {
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

const adminUser = {
  state,
  mutations,
  actions,
  getters: {
    listAdminUsers: state => state.listAdminUsers,
    totalAdminUsers: state => state.total
  }
};

export default adminUser;
