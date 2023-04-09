<template>
  <router-link class="info-button" router :to="activeLink"> <slot></slot> </router-link>
</template>

<script>
export default {
  name: "ButtonLink",
  props: {
    activeLink: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
  .info-button {
    min-width: 177px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    min-height: 50px;
    background-color: var(--main-orange-dark);

    &:hover {
       background-color: var(--main-orange-light);
       cursor: pointer;
     }
  }

</style>