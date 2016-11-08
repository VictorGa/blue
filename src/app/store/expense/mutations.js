import { ADD_EXPENSE } from './events'

export const state = {
  expenses: []
}

export const mutations = {
  [ADD_EXPENSE] (state, value) {
    state.expenses.push({ value })
  }
}
