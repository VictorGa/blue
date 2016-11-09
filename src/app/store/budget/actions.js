import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  ADD_INCOME
} from './events'

export default {
  [ADD_EXPENSE]: ({ commit }, payload) => {
    commit(ADD_EXPENSE, payload)
  },

  [REMOVE_EXPENSE]: ({ commit }, payload) => {
    commit(REMOVE_EXPENSE, payload)
  },

  [ADD_INCOME]: ({ commit }, payload) => {
    commit(ADD_INCOME, payload)
  }
}
