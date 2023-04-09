<template>
  <div class="first-screen-news-content">
    <start-title-page :main-title="mainTitle" :name-page="namePage" :paragraph="paragraph"/>
    <search-input class="search-input" :place-holder="'Search'"/>
  </div>
</template>

<script>
import NameOfPage from "@/shared/NameOfPage.vue";
import MainTitleSemiBold from "@/shared/MainTitleSemiBold.vue";
import SearchInput from "@/shared/SearchInput.vue";
import StartTitlePage from "@/shared/StartTitlePage.vue";

export default {
  name: "FirstScreen",
  components: {StartTitlePage, SearchInput, MainTitleSemiBold, NameOfPage},
  data() {
    return {
      mainTitle: 'Lorem Ipsum is simply dummy text of the printing and.',
      namePage: 'News',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    }
  }

}
</script>

<style scoped lang="scss">
  .first-screen-news-content {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    padding: 0 15px;

    .search-input {
      margin-top: 74px;
      margin-bottom: 51px;
    }
  }
</style>