<template>
  <div class="container_logo">
    <router-link router to="/" class="content"
         :class="activeSize === true ? 'active' : 0"
                 @click="changeActive(0)">
      <slot/>
    </router-link>
  </div>
</template>

<script>

export default {
  name: "MainLogo",
  props: {
    activeSize: {
      type: Boolean,
      require: true
    }
  },
}
</script>

<style scoped lang="scss">
  .container_logo {
    display: flex;

    .content {
      font-family: 'Poppins-ExtraBold', sans-serif;
      font-size: 29px;
      font-weight: 800;
      line-height: 153.5%;
    }

    .active {
      font-size: 24px;
    }

    &:hover {
      cursor: pointer;
    }
  }


  @media (max-width: 480px) {
    .container_logo {
      .content {
        font-size: 22px;
      }
    }
  }
</style>