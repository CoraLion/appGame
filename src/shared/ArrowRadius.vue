<template>
  <div class="arrow left" v-if="activeArrow === 'left'">
    <arrow-simple :active-arrow="'left'"/>
  </div>
  <div class="arrow right" v-else>
    <arrow-simple :active-arrow="'right'"/>
  </div>
</template>

<script>
import ArrowSimple from "@/shared/ArrowSimple.vue";

export default {
  name: "ArrowRadius",
  components: {ArrowSimple},
  props: {
    activeArrow: {
      type: String,
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
    .arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 60px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      min-height: 60px;

      &.left {
        border: 5px solid var(--main-orange-dark);

        svg {
          max-height: 30px;
          width: 100%;
          height: 100%;
          max-width: 30px;
          fill: var(--main-orange-dark);
        }

        &:hover {
          cursor: pointer;
          border: 7px solid  var(--main-orange-light);

          svg {
            fill: var(--main-orange-light);
          }
        }
      }

      &.right {
        background-color: var(--main-orange-light);
        svg {
          max-height: 30px;
          width: 100%;
          height: 100%;
          max-width: 30px;
          fill: var(--white);
        }

        &:hover {
          cursor: pointer;
          background-color: var(--main-orange-dark);
        }
      }
    }

</style>