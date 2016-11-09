import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  ADD_INCOME
} from './events'

import _ from 'lodash'

export const state = {
  expenses: [],
  incomes: []
}

export const mutations = {
  [ADD_EXPENSE] (state, value) {
    state.expenses.push({ value })
  },

  [REMOVE_EXPENSE] (state, item) {
    const index = _.indexOf(state.expenses, item)

    state.expenses.splice(index, 1)
  },

  [ADD_INCOME] (state, value) {
    state.incomes.push({ value })
  }
}
