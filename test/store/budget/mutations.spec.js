import { expect } from 'chai'
import budget from '../../../src/app/store/budget'

const { mutations } = budget

const { ADD_EXPENSE, ADD_INCOME } = mutations

describe('budget mutations', () => {
  it('should successfully add an expense', () => {
    const state = {
      expenses: [],
      incomes: []
    }

    ADD_EXPENSE(state, 250)

    expect(state.expenses.length).to.equal(1)
  })

  it('should successfully add an income', () => {
    const state = {
      expenses: [],
      incomes: []
    }

    ADD_INCOME(state, 250)

    expect(state.incomes.length).to.equal(1)
  })
})
