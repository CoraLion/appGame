<template>
  <div class="gray-switch-container">
      <arrow-simple class="arrow" :active-arrow="'left'" @click="activeMinus"/>
      <span class="slider-num-img">{{(activeItem+1)}} of {{(arrayLength)}}</span>
      <arrow-simple class="arrow" :active-arrow="'right'" @click="activePlus"/>
  </div>
</template>

<script>
import ArrowSimple from "@/shared/ArrowSimple.vue";

export default {
  name: "GraySwitch",
  components: {ArrowSimple},
  props: {
    arrayLength: {
      type: Number,
      require: true
    }
  },
  data() {
    return {
      activeItem: 0
    }
  },
  methods: {
    activeMinus() {
      if(this.activeItem !== 0) {
        this.activeItem--
      } else {
        this.activeItem = this.arrayLength-1
      }
    },
    activePlus() {
      if(this.activeItem === this.arrayLength-1) {
        this.activeItem = 0
      } else {
        this.activeItem++
      }
    },
  },
  watch: {
    activeItem() {
        this.$emit("changeActiveIndex", this.activeItem)
    }
  }
}
</script>

<style scoped lang="scss">
    .gray-switch-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      background-color: var(--dark-grey);
      max-width: 179px;
      padding: 17px 30px;
      width: 100%;
      height: 100%;
      max-height: 67px;

      .slider-num-img {
        width: 60px;
        margin: 0 27px;
      }

      .arrow {
        width: 12px;
        height: 12px;
        fill: var(--white);

        &:hover {
          cursor: pointer;
        }
      }
    }
</style>