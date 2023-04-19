<template>
  <div class="about-text-container">
    <div class="about-text-content">
      <div class="image-about">
              <img :src="getUrlAbout(img)" alt="game">
      </div>
      <div class="text-about">
        <span class="small-title">{{smallTitle}}</span>
        <main-title-semi-bold class="main-title">{{mainTitle}}</main-title-semi-bold>
        <main-paragraph class="paragraph">{{paragraph}}</main-paragraph>
      </div>
    </div>
    <span class="background-about"/>
  </div>
</template>

<script>
import MainParagraph from "@/shared/MainParagraph.vue";
import MainTitleSemiBold from "@/shared/MainTitleSemiBold.vue";

export default {
  name: "AboutText",
  components: {MainTitleSemiBold, MainParagraph},
  data() {
    return {
      smallTitle: 'Lorem Ipsum',
      mainTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
      img: 'game-2.jpg'
    }
  }
}
</script>

<style scoped lang="scss">
  .about-text-container {
    position: relative;
    overflow: hidden;
    .about-text-content {
      position: relative;
      z-index: 1;
      display: flex;
      margin: 0 auto;
      max-width: 1250px;
      padding: 0 15px;
      justify-content: space-between;

      .image-about {
        max-width: 496px;
        max-height: 490px;
        margin-right: 95px;
        overflow: hidden;
        display:flex;
        align-self: flex-end;
        justify-content: center;
        img {
          display:block;
          max-width: 180%;
          max-height: 100%;
        }
      }

      .text-about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        max-width: 536px;
        margin: 134px 0 100px;

        .main-title {
          margin-bottom: 14px;
        }

        .small-title {
          font-family: 'Poppins-Medium', sans-serif;
          margin-bottom: 14px;
        }

        .paragraph {
           line-height: 32.4px;
        }
      }
    }

    .background-about {
      content: "";
      position: absolute;
      top:0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      max-height: 100%;
      background-color: var(--background-brown-color);
    }
  }

  @media (max-width: 1024px){
      .about-text-container {
        .about-text-content {
            flex-direction: column-reverse;
          align-items: center;

          .image-about {
            max-width: none;
            margin-right: 0;
          }
        }
      }
  }
</style>