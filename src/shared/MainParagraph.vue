<template>
<div class="paragraph">
  <slot/>
</div>
</template>

<script>
export default {
  name: "MainParagraph"
}
</script>

<style scoped>
  .paragraph {
    font-size: 16px;
    max-width: 570px;
    line-height: 26px;
  }
</style>