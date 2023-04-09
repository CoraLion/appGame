<template>
<div class="map-screen-container">
    <img :src="getUrl(imageMap)" alt="map">
</div>
</template>

<script>
import reusedCode from "@/mixins/reusedCode";

export default {
  name: "MapScreen",
  mixins: [reusedCode],
  data() {
    return {
      imageMap: 'map-global.svg'
    }
  }
}
</script>

<style scoped lang="scss">
  .map-screen-container {
    max-width: 1060px;

    img {
      width: 100%;
      height: 100%;
    }
  }
</style>