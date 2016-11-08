import { ADD_INCOME } from './events'

export default {
  [ADD_INCOME]: ({ commit }, payload) => {
    commit(ADD_INCOME, payload)
  }
}
