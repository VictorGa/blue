import { ADD_INCOME } from './events'

export const state = {
  incomes: []
}

export const mutations = {
  [ADD_INCOME] (state, value) {
    state.incomes.push({ value })
  }
}
