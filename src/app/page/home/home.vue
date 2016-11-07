<style lang="scss" module>
.page {
  flex: 1;
  background: color('main');
}

.title {
  display: inline-block;
  padding: 20px;
  background: green;

  span {
    float: left;
    background: blue;
  }
}
</style>

<template>
  <div :class="$style.page">
    <h2 :class="$style.title">Home <span>page</span></h2>
  </div>
</template>

<script src="./home.js"></script>
