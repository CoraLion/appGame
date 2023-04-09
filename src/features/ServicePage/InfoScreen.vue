<template>
  <div class="info-container">
    <info-card class="info-card" v-for="info in infoGame" :key="info.id" :info-game="info"/>
  </div>
</template>

<script>
import InfoCard from "@/entities/InfoCard.vue";

export default {
  name: "InfoScreen",
  components: {InfoCard},
  data() {
    return {
      infoGame: []
    }
  },
  created() {
    this.infoGame = this.$store.state.infoGame;
  }
}
</script>

<style scoped lang="scss">
  .info-container {
    display: flex;
    max-width: 1200px;
    max-height: 1840px;
    margin: 0 auto 168px;
    padding: 0 15px;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;

    .info-card {
      margin-bottom: 168px;

      &:last-child {
        margin-bottom: 0;
      }
    }

  }

  @media (max-width: 1080px) {
    .info-container {
      max-height: 1200px;

      .info-card {
        margin-bottom: 50px;
      }
    }

  }
</style>