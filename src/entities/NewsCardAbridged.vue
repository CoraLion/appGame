<template>
 <div class="abridged-news-container" :class="buttonStyle === 'row' ? 'row' : ''">
   <div class="image-news">
     <img :src="getUrlNews(newsCard.img)" alt="">
   </div>
   <div class="text-content">
     <div class="smash-and-min">
       <button-link class="smash-button"
                    :active-link="'/news/' + newsCard.id" >{{smashText}}</button-link>
       <span class="minute">
        {{newsCard.minute}}
      </span>
     </div>
     <main-title-semi-bold class="main-title"
                           :class="newsCard.status === 'main' ? 'main' : 0">
       {{newsCard.mainTitle}}
     </main-title-semi-bold>
   </div>
 </div>
</template>

<script>
import reusedCode from "@/mixins/reusedCode";
import MainTitleSemiBold from "@/shared/MainTitleSemiBold.vue";
import ButtonLink from "@/shared/ButtonLink.vue";

export default {
  name: "NewsCardAbridged",
  components: {ButtonLink, MainTitleSemiBold},
  mixins: [reusedCode],
  props: {
    newsCard: {
      type: Object,
      require: true
    },
    buttonStyle: {
      type: String,
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
  .abridged-news-container {
    display: flex;
    max-width: 618px;
    width: 100%;

    .image-news {
      max-width: 195px;
      height: 183px;
      width: 100%;
      overflow: hidden;
      border-radius: 20px;
      img {
        scale: 1.2;
        width: 100%;
        height: 100%;
      }
    }

    .text-content {
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-left: 31px;

      .smash-and-min {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 23px;

        .smash-button {
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          max-width: 138px;
          width: 100%;
          min-height: 40px;
          margin-right: 16px;

          &:hover {
            cursor: pointer;
          }
        }
      }
      .main-title {
        font-size: 23px;
        line-height: 34.5px;
      }
    }

    &.row {
      max-width: 400px;
      .text-content {
        margin-left: 0;

        .smash-and-min {
          margin-top: 15px;
        }
      }
    }

    &:nth-child(5n+1) {
      .text-content {
        .smash-and-min {
          .smash-button {
            background-color: var(--blue);
          }
        }
      }
    }

    &:nth-child(5n+2) {
      .text-content {
        .smash-and-min {
          .smash-button {
            background-color: #FF7C32;
          }
        }
      }
    }

    &:nth-child(5n+3) {
      .text-content {
        .smash-and-min {
          .smash-button {
            background-color: #FF8484;
          }
        }
      }
    }

    &:nth-child(5n+4) {
      .text-content {
        .smash-and-min {
          .smash-button {
            background-color: #23A54F;
          }
        }
      }
    }

    &:nth-child(5n+5) {
      .text-content {
        .smash-and-min {
          .smash-button {
            background-color: #9921C3;
          }
        }
      }
    }
  }

  .main {
    text-shadow: #ffffff 1px 0 10px;
  }


  @media (max-width: 1024px) {
    .abridged-news-container {
      flex-direction: column;

      .text-content {
        margin-left: 0;
        margin-top: 31px;
      }
    }
  }
</style>