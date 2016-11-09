import _ from 'lodash'

export const expenses = state => state.expenses
export const incomes = state => state.incomes

export const totalExpense = state => {
  const { expenses } = state

  return _.reduce(expenses, (total, expense) => {
    return total + expense.value
  }, 0)
}

export const totalIncome = state => {
  const { incomes } = state

  return _.reduce(incomes, (total, income) => {
    return total + income.value
  }, 0)
}

export const totalBalance = state => {
  return totalIncome(state) - totalExpense(state)
}
