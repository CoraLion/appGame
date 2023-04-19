<template>
  <div class="type-of-game-container">
    <div class="content">
      <main-title-bold class="main-title">{{textTitle}}</main-title-bold>
      <main-paragraph class="paragraph">{{textParagraph}}</main-paragraph>
      <div class="type-of-game">
        <type-of-game-card v-for="type in typeGame" :key="type.id" :type-card="type"/>
      </div>
    </div>
    <img class="background-image" :src="getUrlHome('background_rock.jpg')" alt="background"/>
  </div>
</template>

<script>
import MainParagraph from "@/shared/MainParagraph.vue";
import MainTitleBold from "@/shared/MainTitleBold.vue";
import TypeOfGameCard from "@/entities/TypeOfGameCard.vue";

export default {
  name: "TypeOfGames",
  components: {TypeOfGameCard, MainTitleBold, MainParagraph},
  data() {
    return {
      textTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      textParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s',
      typeGame: [
        {id: 0, image: 'smartphone.svg', text: 'Mobile Game Development'},
        {id: 1, image: 'pc 1.svg', text: 'PC Game Development'},
        {id: 2, image: 'ps4 1.svg', text: 'PS4 Game Development'},
        {id: 3, image: 'vr.svg', text: 'AR/VR Solutions'},
        {id: 4, image: 'desktop.svg', text: 'AR/ VR design'},
        {id: 5, image: '3d-modeling.svg', text: '3D Modelings'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .type-of-game-container {
    overflow: hidden;
    position: relative;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      z-index: 2;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 15px;

      .main-title {
        line-height: 56.25px;
        margin: 93px 0 25px;
        max-width: 854px;
      }

      .paragraph {
        max-width: 848px;
        margin-bottom: 99px;
      }

      .type-of-game {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 92px;
      }
    }
    .background-image {
      width: 100%;
      object-fit: cover;
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 0;
      max-height:100%;
      backdrop-filter: blur(2px)
    }

    &:before {
      content: '';
      position: absolute;
      z-index: 1;
      height:100%;
      width: 100%;
      left: 0;
      bottom: 0;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), rgba(0, 0, 0, 0.54);
    }
  }
</style>