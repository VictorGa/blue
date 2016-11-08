import { ADD_EXPENSE } from '../../store/expense/mutations'
import { ADD_INCOME } from '../../store/income/mutations'

export default {

  data () {
    return {
      newIncome: 0,
      newExpense: 0
    }
  },

  mounted () {
    // console.log('HOME')
  },

  methods: {
    addExpense () {
      this.store.$dispatch(ADD_EXPENSE, this.newExpense)

      this.newExpense = 0
    },

    addIncome () {
      this.store.$dispatch(ADD_INCOME, this.newIncome)

      this.newIncome = 0
    }
  }
}
