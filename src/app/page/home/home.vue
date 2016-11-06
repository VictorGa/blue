<style lang="scss" module>
@import '~breakpoint-sass';

.page {
  background: red;

  @include breakpoint($s) {
    background: color('background');
  }
}

.myButton {
  composes: defaultButton from 'style/ui/button.scss';
}
</style>

<template>
  <div class="home">
    <h2>Home page</h2>
  </div>
</template>
