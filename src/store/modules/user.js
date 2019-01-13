import { loginByEmail } from "@/api/login";

const user = {
  state: {
    user: "",
    status: "",
    code: "",
    name: "",
    avatar: "",
    introduction: "",
    roles: [],
    setting: {
      articlePlatform: []
    }
  },
  mutations: {
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },

  actions: {
    LoginByEmail({ commit }, userInfo) {
      const email = userInfo.email.trim();
      return new Promise((resolve, reject) => {
        loginByEmail(email, userInfo.password)
          .then(response => {
            const data = response.data;
            commit("SET_TOKEN", data.token);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};

export default user;
