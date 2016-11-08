import _ from 'lodash'

export const expenses = state => state.expenses

export const totalExpense = state => {
  const { expenses } = state

  return _.reduce(expenses, (total, expense) => {
    return total + expense.value
  }, 0)
}
