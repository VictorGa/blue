<script src="./home.js"></script>

<style module>
  $backgroundColor: #eaeaea;

  .page {
    position: absolute 0 * * 0;
    composes: full-content-centered from 'style/compose/layout/page.css';
    background: #c0c0c0;

    @media ($m) {
      background: $backgroundColor;
    }
  }

  .content {
    size: 200px;
    margin: * auto;
    text: bold center 1.25em 1.5em;
  }

  .title {
    composes: type-1 from 'style/compose/type/heading.css';
  }
</style>

<template>
  <div :class="$style.page">
    <div :class="$style.content">
      <h2 :class="$style.title">Home</h2>
      {{ $t('message') }}
    </div>
  </div>
</template>
