<template>
  <div class="title">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "MainTitleBold"
}
</script>

<style scoped>
  .title {
    font-family: 'Poppins-Bold', sans-serif;
    font-size: 30px;
    line-height: 187.5%;
  }
</style>