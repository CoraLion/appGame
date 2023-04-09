<template>
  <div class="not-found-container">
    <main-title-semi-bold> {{warningMessage}}</main-title-semi-bold>
    <button-radius :path-url="'/'">
          {{backMessage}}
    </button-radius>
  </div>
</template>

<script>
import MainTitleSemiBold from "@/shared/MainTitleSemiBold.vue";
import ButtonRadius from "@/shared/ButtonRadius.vue";

export default {
  name: "NotFoundPage",
  components: {ButtonRadius, MainTitleSemiBold},
  data() {
    return {
      warningMessage: 'OOPS! Page not found. :(',
      backMessage: 'Back to home page'
    }
  }
}
</script>

<style scoped>
  .not-found-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
    max-width: 1200px;

  }
</style>