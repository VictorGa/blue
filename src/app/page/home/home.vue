<script src="./home.js"></script>

<style module>
  $page: 'style/compose/layout/page.css';
  $button: 'style/compose/ui/button.css';

  $backgroundColor: #eaeaea;

  .page {
    position: absolute 0 * * 0;
    composes: fullscreen-centered from $page;
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

  .button {
    composes: primary from $button;
  }
</style>

<template>
  <div :class="$style.page">
    <div :class="$style.content">
      <h2 :class="$style.title">Home</h2>
      {{ $t('message') }}
      <button :class="$style.button">Hoi</button>
    </div>
  </div>
</template>
