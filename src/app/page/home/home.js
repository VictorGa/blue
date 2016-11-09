import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  ADD_INCOME
} from '../../store/budget/events'
import { mapGetters } from 'vuex'

export default {

  data () {
    return {
      newIncome: 0,
      newExpense: 0
    }
  },

  computed: mapGetters([
    'expenses',
    'incomes',
    'totalExpense',
    'totalIncome',
    'totalBalance'
  ]),

  methods: {
    addExpense () {
      this.$store.dispatch(ADD_EXPENSE, this.newExpense)

      this.newExpense = 0
    },

    removeExpense (expense) {
      this.$store.dispatch(REMOVE_EXPENSE, expense)
    },

    addIncome () {
      this.$store.dispatch(ADD_INCOME, this.newIncome)

      this.newIncome = 0
    }
  }
}
