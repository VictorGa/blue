import { expect } from 'chai'
import budget from '../../../src/app/store/budget'

const { getters } = budget

const { totalExpense, totalIncome, totalBalance } = getters

describe('budget getters', () => {
  const state = {
    expenses: [{ value: 10 }, { value: 100 }],
    incomes: [{ value: 1000 }, { value: 500 }]
  }

  it('should calculate total expense', () => {
    const value = totalExpense(state)

    expect(value).to.equal(110)
  })

  it('should calculate total income', () => {
    const value = totalIncome(state)

    expect(value).to.equal(1500)
  })

  it('should calculate total balance', () => {
    const value = totalBalance(state)

    expect(value).to.equal(1390)
  })
})
