<template>
  <div class="news-card-container">
    <div class="image-card">
      <img :src="getUrlNews(newsCard.img)" alt="">
    </div>
    <div class="smash-and-min">
      <button-link class="smash-button" :active-link="'/news/' + newsCard.id">{{smashText}}</button-link>
      <span class="minute">
        {{newsCard.minute}}
      </span>
    </div>
    <main-title-semi-bold class="main-title">{{newsCard.mainTitle}}</main-title-semi-bold>
    <div class="text-array">
      <main-paragraph>{{newsCard.paragraph}}</main-paragraph>
    </div>
  </div>
</template>

<script>
import reusedCode from "@/mixins/reusedCode";
import MainTitleSemiBold from "@/shared/MainTitleSemiBold.vue";
import MainParagraph from "@/shared/MainParagraph.vue";
import ButtonLink from "@/shared/ButtonLink.vue";

export default {
  name: "NewsCardFull",
  components: {ButtonLink, MainParagraph, MainTitleSemiBold},
  mixins: [reusedCode],
  props: {
    newsCard: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      smashText: 'John Smash'
    }
  }
}
</script>

<style scoped lang="scss">
  .news-card-container {
    max-width: 587px;
    max-height: 768px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    text-align: left;

    .image-card {
      max-width: 587px;
      min-height: 295px;
      border-radius: 20px;
      overflow: hidden;
      margin-bottom: 21px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .smash-and-min {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 21px;

      .smash-button {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        max-width: 164px;
        padding: 5px;
        text-align: center;
        width: 100%;
        background-color: var(--blue);
        transition: all .5s;
        margin-right: 20px;

        &:hover {
          cursor: pointer;
          background-color: var(--blue-hover);
        }
      }
    }

    .main-title {
      margin-bottom: 32px;
    }
  }
</style>