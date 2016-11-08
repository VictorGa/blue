<script src="./home.js"></script>
<style lang="scss" module src="./home.scss"></style>

<template>
  <div :class="$style.page">

    <img src="../../../asset/image/track.svg" />

      {{ totalIncome }}

      <div class="income">
        <input type="number" v-model="newIncome">
        <button type="button" @click="addIncome">Add Income</button>
      </div>

      <ul>
        <li v-for="income in incomes">
          {{ income.value }}
        </li>
      </ul>

      {{ totalExpense }}

      <div class="expense">
        <input type="number" v-model="newExpense">
        <button type="button" @click="addExpense">Add expense</button>
      </div>

      <ul>
        <li v-for="expense in expenses">
          {{ expense.value }}
        </li>
      </ul>

      {{ balance }}

  </div>
</template>
