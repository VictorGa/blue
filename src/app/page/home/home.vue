<script src="./home.js"></script>
<style module src="./home.css"></style>

<template>
  <div :class="$style.page">
    <div :class="$style.content">
      <h2 :class="$style.title">Home</h2>
      {{ $t('message') }}
      <button :class="$style.button">Example button</button>
    </div>
  </div>
</template>
