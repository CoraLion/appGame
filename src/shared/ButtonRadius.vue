<template>
  <div class="container-button" v-if="pathUrl !== null">
    <router-link router :to="pathUrl">
      <slot></slot>
    </router-link>
  </div>
  <div class="container-button" v-else>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ButtonRadius",
  props: {
    pathUrl: {
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
.container-button {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 13px;
  line-height: 20px;
  max-width: 132px;
  width: 100%;
  max-height: 42px;
  min-height: 42px;
  background-color: var(--main-orange-light);
  transition: all .5s;
  padding: 10px 25px;

  &:hover {
    cursor: pointer;
    background-color: var(--main-orange-dark);
  }
}
</style>