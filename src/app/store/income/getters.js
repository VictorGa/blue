import _ from 'lodash'

export const incomes = state => state.incomes

export const totalIncome = state => {
  const { incomes } = state

  return _.reduce(incomes, (total, income) => {
    return total + income.value
  }, 0)
}
