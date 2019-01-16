import { fetchList, fetchItem, updateItem } from "@/api/cryptoCurrency";

const state = {
  items: [],
  total: 0
};

const mutations = {
  SET_LIST_CRYPTO_CURRENCIES: (state, data) => {
    state.items = data;
  },
  SET_TOTAL_CRYPTO_CURRENCIES: (state, data) => {
    state.total = data;
  }
};

const actions = {
  fetchCryptoCurrencyDetail({ commit }, id) {
    return new Promise((resolve, reject) => {
      fetchItem(id)
        .then(response => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  fetchListCryptoCurrency({ commit }, query) {
    return new Promise((resolve, reject) => {
      fetchList(query)
        .then(response => {
          commit("SET_LIST_CRYPTO_CURRENCIES", response.data);
          commit(
            "SET_TOTAL_CRYPTO_CURRENCIES",
            parseInt(response.headers["total"])
          );
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  updateCryptoCurrency({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateItem(data)
        .then(response => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

const itemModule = {
  state,
  mutations,
  actions,
  getters: {
    listCryptoCurrencies: state => state.items,
    totalCryptoCurrencies: state => state.total
  }
};

export default itemModule;
