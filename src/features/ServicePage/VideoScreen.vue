<template>
  <div class="video-screen-container">
    <div class="video-container">
      <video-player :video="video"/>
    </div>
    <div class="right-content">
      <main-title-bold class="main-title">{{mainTitle}}</main-title-bold>
      <main-paragraph class="paragraph">{{paragraph}}</main-paragraph>
      <div class="list-plus" v-for="plus in plusContent" :key="plus.id">
        <img class="check" :src="getUrlService(plus.img)" alt="">
        {{plus.text}}
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from "@/entities/VideoPlayer.vue";
import MainTitleBold from "@/shared/MainTitleBold.vue";
import MainParagraph from "@/shared/MainParagraph.vue";

export default {
  name: "VideoScreen",
  components: {MainParagraph, MainTitleBold, VideoPlayer},
  data() {
    return {
      plusContent: [
        {
          id: 0,
          text: 'Lorem Ipsum is simply',
          img: 'check.svg'
        },
        {
          id: 1,
          text: 'Lorem Ipsum is simply',
          img: 'check.svg'
        },
        {
          id: 2,
          text: 'Lorem Ipsum is simply',
          img: 'check.svg'
        },{
          id: 3,
          text: 'Lorem Ipsum is simply',
          img: 'check.svg'
        },
      ],
      video: 'Marvels Spider-Man 2 - PlayStation Showcase 2021_ Reveal Trailer _ PS5.mp4',
      mainTitle: 'Lorem Ipsum is simply dummy text.',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .'
    }
  }
}
</script>

<style scoped lang="scss">
  .video-screen-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 183px;
    padding: 0 15px;
    max-width: 1214px;

    .video-container {
      margin: 78px 87.6px 0 0;
    }

    .right-content {
      text-align: left;
      margin-top: 78px;
      max-width: 428px;

      .main-title {
        margin-bottom: 12px;
        line-height: 180.5%;
      }

      .paragraph {
        margin-bottom: 28px;
        font-size: 14px;
      }

      .list-plus {
        display: flex;
        align-items: center;
        font-size: 14px;
        margin-bottom: 24px;

        .check {
          margin-right: 10px;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  
  @media (max-width: 1024px) {
    .video-screen-container {
      flex-direction: column-reverse;

      .video-container {
        margin-right: 0;
      }
    }
  }
</style>