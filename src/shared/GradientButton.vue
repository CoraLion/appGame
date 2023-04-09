<template>
  <div class="button-round">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "GradientButton"
}
</script>

<style scoped lang="scss">
  .button-round {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 195px;
    min-width: 158px;
    min-height: 53px;
    border-radius: 40px;
    font-family: 'Poppins-Medium', sans-serif;
    background: var(--button-gradient);

    &:hover {
      cursor: pointer;
      background: var(--button-gradient-hover);
    }
  }
</style>