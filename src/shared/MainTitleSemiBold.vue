<template>
  <div class="title">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "MainTitleSemiBold"
}
</script>

<style scoped>
  .title {
    font-family: 'Poppins-SemiBold', sans-serif;
    font-size: 30px;
    line-height: 187.5%;
  }
</style>