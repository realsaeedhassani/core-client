import {
  getName,
  setName,
  removeName,
  getRole,
  setRole,
  removeRole,
  getToken,
  setToken,
  removeToken,
  getUserName,
  setUserName,
  removeUserName,
} from '../utils/cookie_token'

// holds your root state
export const state = () => ({
  name: getName(),
  role: getRole(),
  token: getToken(),
  username: getUserName(),
})

// contains your actions
export const actions = {
  /**
   * ورود کاربر به حساب کاربری
   * ---------
   * {
   *
   * }
   * @param commit
   * @param response
   * @returns {Promise<unknown>}
   */
  loginConfig({ commit }, response) {
    try {
      return new Promise((resolve, reject) => {
        commit('SET_NAME', response.name)
        commit('SET_ROLE', response.role)
        commit('SET_USER_NAME', response.username)
        commit('SET_TOKEN', response.access_token)
        setName(response.name)
        setRole(response.role)
        setUserName(response.user)
        setToken(response.access_token)
      })
    } catch (e) {}
  },
  /**
   * خروج کاربر از حساب کاربری و حدف توکن
   * ----------
   * @param commit
   * @param state
   * @returns {Promise<unknown>}
   */
  logoutConfig({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('SET_UD', '')
      commit('SET_NAME', '')
      commit('SET_ROLE', '')
      commit('SET_TOKEN', '')
      commit('SET_USER_NAME', '')
      removeName()
      removeRole()
      removeToken()
      removeUserName()
      resolve()
    })
  },
}
// contains your mutations
export const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ROLE: (state, role) => {
    state.role = role
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER_NAME: (state, username) => {
    state.username = username
  },
}
// your root getters
export const getters = {
  name: (state) => state.name,
  role: (state) => state.role,
  token: (state) => state.token,
  username: (state) => state.username,
}
