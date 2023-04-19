<template>
  <div class="top-center-column">
    <span class="center-title"><slot/></span>
    <router-link router :to="text.path" class="center-text"
                   v-for="text in footerText"
                   :key="text.id" v-if="activeLink === true" @click="changeActive(text.pathId)">{{text.text}}</router-link>
    <span class="center-text" v-for="text in footerText"
          :key="text.id" v-else>
      {{text.text}}
    </span>
  </div>
</template>

<script>

export default {
  name: "ListFooter",
  props: {
    footerText: {
      type: Array,
      require: true
    },
    activeLink: {
      type: Boolean,
      require: true
    }
  },
}
</script>

<style scoped lang="scss">
      .top-center-column {
        display: flex;
        flex-direction: column;
        margin-right: 110px;
        max-width: 94px;

        .center-title {
          font-family: 'Poppins-Medium', sans-serif;
          font-size: 17px;
          margin-bottom: 15px;
        }

        .center-text {
          line-height: 186.3%;
        }

        &:last-child {
          margin-right: 0;
          max-width: 282px;
        }
      }

</style>