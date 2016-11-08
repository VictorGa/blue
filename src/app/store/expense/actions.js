import { ADD_EXPENSE } from './events'

export default {
  [ADD_EXPENSE]: ({ commit }, payload) => {
    commit(ADD_EXPENSE, payload)
  }
}
