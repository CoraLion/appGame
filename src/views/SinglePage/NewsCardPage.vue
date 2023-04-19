<template>
  <div class="news-card-page-container">
    <div class="top-content">
      <main-title-bold>{{mainTitle}}</main-title-bold>
    </div>
    <div class="bottom-content">
      <div class="news-content">
        <div class="video-and-image-content" v-if="newsId.video !== null">
          <video-player class="video-content"
                        :video="newsId .video"/>
          <div class="image">
            <img :src="getUrlNews(newsId.img)" alt="">
          </div>
        </div>
        <div class="image-content" v-else>
          <div class="image">
            <img :src="getUrlNews(newsId.img)" alt="">
          </div>
        </div>
        <div class="text-content">
            <main-title-semi-bold class="title">{{newsId.mainTitle}}</main-title-semi-bold>
            <main-paragraph class="paragraph">{{newsId.paragraph}}</main-paragraph>
        </div>
      </div>
      <div class="scroll-content">
        <search-input :place-holder="'Search'"/>
        <scroll-column-news
            :news-array="newsCard"
            :direction="'row'"
            :activeItem="routeId"/>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollColumnNews from "@/entities/ScrollColumnNews.vue";
import MainTitleSemiBold from "@/shared/MainTitleSemiBold.vue";
import VideoPlayer from "@/entities/VideoPlayer.vue";
import SearchInput from "@/shared/SearchInput.vue";
import MainTitleBold from "@/shared/MainTitleBold.vue";
import MainParagraph from "@/shared/MainParagraph.vue";

export default {
  name: "NewsCardPage",
  components: {MainParagraph, MainTitleBold, SearchInput, VideoPlayer, MainTitleSemiBold, ScrollColumnNews},
  data() {
    return {
      mainTitle: 'News Card'
    }
  },
  computed: {
    newsCard() {
      return this.$store.getters.getNewsReverse;
    },
    newsId() {
      return this.newsCard.find(item => item.id === this.routeId)
    },
    routeId() {
      return Number(this.$route.params.id);
    }
  },
}
</script>

<style scoped lang="scss">
  .news-card-page-container {
    display: flex;
    max-width: 1440px;
    flex-direction: column;
    padding: 0 15px;
    margin: 0 auto;

    .top-content {
      margin-top: 140px;
      margin-bottom: 30px;
    }

    .bottom-content {
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;

      .news-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        max-width: 100%;
        margin-right: 30px;

        .video-and-image-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 30px;
          width: 100%;
          height: 100%;

          .video-content {
            margin-right: 20px;
          }
        }

        .image {
          max-width: 600px;
          width: 100%;
          height: 100%;
          max-height: 400px;
          overflow: hidden;
          border-radius: 30px;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .text-content {
          display: flex;
          flex-direction: column;
          margin-bottom: 50px;
          max-width: 100%;

          .title {
            margin-bottom: 30px;
          }

          .paragraph {
            text-align: left;
            overflow-y: scroll;
            max-width: inherit;
            max-height: 230px
          }
        }
      }
      .scroll-content {
        display: inherit;
        flex-direction: column;
        align-items: center;
        max-width: 100%;
        }
      }
    }

  @media (max-width: 1024px) {
    .news-card-page-container {

      .bottom-content {

        .news-content {
          margin-right: 0;
          .video-and-image-content {
            flex-direction: column;

            .video-content {
              margin-right: 0;
              margin-bottom: 30px;
            }
          }
        }
      }
    }
  }
</style>