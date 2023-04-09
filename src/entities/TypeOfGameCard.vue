<template>
 <div class="type-card">
   <div class="circle">
     <img :src="getUrlHome(typeCard.image)" alt="icon"/>
   </div>
   <div class="name-type">
     {{typeCard.text}}
   </div>
   <arrow :active-arrow="'right'" class="arrow"/>
 </div>
</template>

<script>
import reusedCode from "@/mixins/reusedCode";
import Arrow from "@/shared/ArrowSimple.vue";

export default {
  name: "TypeOfGameCard",
  components: {Arrow},
  props: {
    typeCard: {
      type: Object,
      require: true
    }
  },
  mixins: [reusedCode]
}
</script>

<style scoped lang="scss">
  .type-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 170px;
    min-width: 225px;
    margin: 15px;

    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 18px;
      max-width: 65px;
      max-height: 65px;
      border-radius: 65px;
      background-color: var(--white);
      margin-bottom: 30px;

      img {
        max-width: 30px;
        max-height: 30px;
      }
    }

    .name-type {
      margin-bottom: 24px;
    }

    .arrow {
      width: 21px;
      height: 21px;
      fill: var(--main-orange-dark);
    }
  }
</style>