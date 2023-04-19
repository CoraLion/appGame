<template>
    <div class="first-screen-contact-container">
      <name-of-page class="name-of-page">{{ nameOfPage }}</name-of-page>
      <main-title-semi-bold class="main-title">{{mainTitle}}</main-title-semi-bold>
      <main-paragraph class="paragraph">{{paragraph}}</main-paragraph>
      <map-screen/>
      <contact-tools/>
      <div class="line">
        <img :src="getUrlContact('line-1.svg')" alt="">
      </div>
    </div>
</template>

<script>
import NameOfPage from "@/shared/NameOfPage.vue";
import MainTitleSemiBold from "@/shared/MainTitleSemiBold.vue";
import MainParagraph from "@/shared/MainParagraph.vue";
import MapScreen from "@/entities/MapScreen.vue";
import ContactTools from "@/entities/ContactTools.vue";

export default {
  name: "FirstScreenContact",
  components: {ContactTools, MapScreen, MainParagraph, MainTitleSemiBold, NameOfPage},
  data() {
    return {
      nameOfPage: 'Contact us',
      mainTitle: 'Lorem Ipsum is simply dummy text of the printing and.',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
    }
  }
}
</script>

<style scoped lang="scss">
  .first-screen-contact-container {
    overflow: hidden;
    display: flex;
    margin: 0 auto;
    max-width: 1218px;
    padding: 0 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .name-of-page {
      margin-top: 125px;
      margin-bottom: 15px;
    }

    .main-title {
      margin-bottom: 13px;
    }

    .paragraph {
      max-width: 100%;
    }
  }
</style>