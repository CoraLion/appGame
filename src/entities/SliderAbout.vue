<template>
  <div class="slider-container">
    <div class="image-container" v-for="photo in photoSlider" :key="photo.id">
      <transition name="fade-translate-x" mode="in-out">
        <img v-if="photo.id === activeItem" :src="getUrlAbout(photo.img)" alt="photo">
      </transition>
    </div>
    <gray-switch class="switch" :active-item="activeItem" :array-length="photoSlider.length" @changeActiveIndex="changeActiveItem"/>
  </div>
</template>

<script>
import reusedCode from "@/mixins/reusedCode";
import GraySwitch from "@/shared/GraySwitch.vue";
import "@/assets/style/animation.css"
export default {
  name: "SliderAbout",
  components: {GraySwitch},
  mixins: [reusedCode],
  props: {
    photoSlider: {
      type: Array
    }
  },
  data() {
    return {
      activeItem: 0,
      routeItem: 'right'
    }
  },
  methods: {
    changeActiveItem(indexActive) {
      this.activeItem = indexActive
    }
  },
}
</script>

<style scoped lang="scss">

.slider-container {
  display: flex;
  flex-direction: row;
  max-width: 739px;
  height: 656px;
  width: 100%;
  overflow: hidden;
  position: relative;

  .image-container {
    max-width: 739px;
    height: 656px;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .switch {
    position: absolute;
    bottom:0;left:0;
  }
}

@media (max-width: 768px) {
  .slider-container {
    height: 456px;
    .image-container {
      height: 456px;
    }
  }
}

</style>