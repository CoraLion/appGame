<template>
  <name-of-page class="name-of-page">{{ namePage }}</name-of-page>
  <main-title-semi-bold class="main-title">{{mainTitle}}</main-title-semi-bold>
  <div class="paragraph">
    {{paragraph}}
  </div>
</template>

<script>
import NameOfPage from "@/shared/NameOfPage.vue";
import MainTitleSemiBold from "@/shared/MainTitleSemiBold.vue";

export default {
  name: "StartTitlePage",
  components: {MainTitleSemiBold, NameOfPage},
  props: {
    namePage: {
      type: String,
      require: true
    },
    mainTitle: {
      type: String,
      require: true
    },
    paragraph: {
      type: String,
      require: true
    },
  }
}
</script>

<style scoped>
    .name-of-page {
      margin: 195px 0 15px;
    }

    .main-title {
      margin-bottom: 13px;
    }

    .paragraph {
      font-family: 'Poppins-Medium', sans-serif;
    }
</style>