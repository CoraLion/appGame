<template>
  <transition name="fade" mode="in-out">
    <div class="loading-tools-container" v-if="$store.state.loadingPage">
      <div class="loading-tools-content" v-if="true">
        <img :src="getUrl(loadingGif)" alt="loading" class="loading-gif">
      </div>
    </div>
  </transition>
</template>

<script>
import reusedCode from "@/mixins/reusedCode";

export default {
  name: "LoadingTools",
  mixins: [reusedCode],
  data() {
    return {
      loadingGif: 'loading-gif.gif',
    }
  },
}
</script>

<style scoped lang="scss">
.loading-tools-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1000;
  .loading-tools-content {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .loading-gif {
      position: relative;
      max-width: 50px;
    }
  }
}

  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-leave-to {
    opacity: 0;
  }
</style>