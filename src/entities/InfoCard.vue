<template>
  <div class="info-card-container">
    <div class="left-content">
      <span class="main-title">
          {{infoGame.mainTitle}}
      </span>
      <span class="paragraph main">{{infoGame.mainText}}</span>
      <span class="paragraph more">{{infoGame.moreText}}</span>
      <button-link :active-link="'/services/' + infoGame.id">{{textButton}}</button-link>
    </div>
    <div class="right-content">
          <img :src="getUrlService(infoGame.img)" alt="" class="">
    </div>
  </div>
</template>

<!--{ name: 'ServicesInfoCard', params: { id: infoGame.id } }-->
<script>
import MainParagraph from "@/shared/MainParagraph.vue";
import ButtonLink from "@/shared/ButtonLink.vue";

export default {
  name: "InfoCard",
  components: {ButtonLink, MainParagraph},
  props: {
    infoGame: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      textButton: 'Read more'
    }
  },
}
</script>

<style scoped lang="scss">
  .info-card-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    width: 100%;

    .left-content {
      max-width: 566px;
      padding: 0 15px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      .main-title {
        font-size: 30px;
        font-family: 'Poppins-Medium', sans-serif;
        line-height: 45px;
        text-align: left;
        margin-bottom: 50px;
      }

      .paragraph {
        font-size: 17px;
        text-align: left;

        &.main {
          margin-bottom: 50px;
        }

        &.more {
          margin-bottom: 46px;
        }
      }

    }

    .right-content {
      display: flex;
      max-width: 496px;
      max-height: 489px;
      overflow: hidden;
      align-items: center;
      justify-content: center;
        img {
          width: 150%;
          height: 100%;
          object-fit: contain;
        }
    }

    &:nth-child(2n+2) {
      flex-direction: row-reverse;
    }
  }


  @media (max-width: 1080px) {
    .info-card-container {
      flex-direction: column-reverse;

      .right-content {
        margin-bottom: 50px;
      }

      &:nth-child(2n+2) {
        flex-direction: column-reverse;
      }
    }
  }
</style>