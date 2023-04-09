<template>
  <div class="right-button">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "GreyButton"
}
</script>

<style scoped lang="scss">
.right-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Rubik-Medium', sans-serif;
  font-size: 20px;
  min-height: 57px;
  max-height: 57px;
  max-width: 137px;
  width: 100%;
  border-radius: 10px;
  background-color: var(--button-grey);

  &:hover {
    cursor: pointer;
    background-color: var(--button-grey-hover);
  }
}
</style>