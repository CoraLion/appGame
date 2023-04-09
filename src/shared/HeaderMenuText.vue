<template>
  <router-link class="text"
               router :to="menuItem.path"
               @click="activeMenuText(menuItem.id)"
               :class="indexActive === menuItem.id ? 'active' : 0">
    {{ menuItem.text_menu }}
  </router-link>
</template>

<script>
export default {
  name: "HeaderMenuText",
  props: {
    menuItem: {
      type: Object,
      require: true
    },
    indexActive: {
      type: Number,
      require: true
    }
  },
  methods: {
    activeMenuText(id) {
      this.$emit('activeIndex', id)
    },
  }
}
</script>

<style scoped lang="scss">
    .text {
        position: relative;
        line-height: 24px;

      &:before {
        content: '';
        position: absolute;
        bottom: -10px;
        height: 4px;
        background-color: var(--main-orange-dark);
        width: 31px;
        border-radius: 20px;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
      }

      &:hover:before {
        transform: scaleX(1);
        transform-origin: left;
        transition: transform 0.5s;
      }
      }

  .active {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: -10px;
      height: 4px;
      background-color: var(--main-orange-dark);
      width: 31px;
      border-radius: 20px;
      transform: scaleX(1);
    }
  }
</style>