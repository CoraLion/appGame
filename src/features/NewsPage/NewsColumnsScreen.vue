<template>
  <div class="news-columns-container">
    <div class="left-column">
      <div class="card-array" v-for="main in mainNews" :key="main.id" >
        <news-card-full class="card" :news-card="main"/>
      </div>
    </div>
    <scroll-column-news :direction="'column'" :news-array="subNews"/>
  </div>
</template>

<script>
import NewsCardFull from "@/entities/NewsCardFull.vue";
import NewsCardAbridged from "@/entities/NewsCardAbridged.vue";
import MainTitleSemiBold from "@/shared/MainTitleSemiBold.vue";
import "@/assets/style/animation.css"
import ScrollColumnNews from "@/entities/ScrollColumnNews.vue";
export default {
  name: "NewsColumnsScreen",
  components: {ScrollColumnNews, MainTitleSemiBold, NewsCardAbridged, NewsCardFull},
  data() {
    return {
      subNews: [],
      mainNews: []
    }
  },
  created() {
    this.subNews = this.$store.getters.getNewsReverse.filter(item => item.status === 'sub');
    this.mainNews = this.$store.getters.getNewsReverse.filter(item => item.status === 'main').slice(0, 2)
  }
}
</script>

<style scoped lang="scss">
  .news-columns-container {
    max-width: 1307px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    flex-direction: row;
    padding: 0 15px;

    .left-column {
      display: flex;
      flex-direction: column;
      max-width: 587px;
      margin: 51px 72px 100px 0;

      .card-array {
        max-width: 587px;
        display: flex;
        flex-direction: column;

        &:after {
          content: "";
          height: 0.7px;
          width: 100%;
          background-color: rgba(165, 165, 165, 1);
          margin: 90px 0;
        }

        &:last-child:after {
          content: none;
        }
      }

    }
  }

  @media (max-width: 768px) {
    .news-columns-container {
      justify-content: center;
      flex-direction: column-reverse;

      .left-column {
        margin-right: 0;
      }
    }
  }
</style>