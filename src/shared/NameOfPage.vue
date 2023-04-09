<template>
  <div class="name-of-page">
    <router-link class="one-name"
                 router to="/"
                 @click="changeActive">
      {{nameFirstPath}}
    </router-link>
    <span class="row"> > </span>
    <span class="name-page"><slot/></span>
  </div>
</template>

<script>
export default {
  name: "NameOfPage",
  data() {
    return {
      nameFirstPath: 'Home'
    }
  },
  methods: {
    changeActive() {
      this.$store.commit('SET_HEADER_ACTIVE', 0)
    }
  }
}
</script>

<style scoped lang="scss">
  .name-of-page {
    display: flex;
    flex-direction: row;
    font-size: 16px;

    .one-name {
      margin-right: 5px;
      line-height: 208.5%;
    }

    .row {
      margin-right: 3px;
      line-height: 208.5%;
    }

    .name-page {
      color: var(--name-page-color);
      line-height: 208.5%;
    }
  }
</style>