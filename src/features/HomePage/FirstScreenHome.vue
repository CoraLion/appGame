<template>
    <div class="first-screen-home-container">
      <div class="content">
        <div class="right-content">
          <main-title-bold class="small-title">
            {{smallTitle}}
          </main-title-bold>
          <main-title-bold class="main-title">
            {{mainTitle}}
          </main-title-bold>
          <main-paragraph class="paragraph"> {{mainParagraph}}</main-paragraph>
          <gradient-button class="button-line">Get more details</gradient-button>
        </div>
        <div class="left-content">
          <img class="element joy-stick" :src="getUrlHome('joy-stick.png')" alt="joy-stick">
          <img class="element one" :src="getUrlHome('unity.svg')" alt="one">
          <img class="element two" :src="getUrlHome('cry.svg')" alt="two">
          <img class="element three" :src="getUrlHome('unreal.svg')" alt="three">
        </div>
      </div>
    </div>
</template>

<script>
import MainParagraph from "@/shared/MainParagraph.vue";
import GradientButton from "@/shared/GradientButton.vue";
import MainTitleBold from "@/shared/MainTitleBold.vue";

export default {
  name: "FirstScreen",
  components: {MainTitleBold, GradientButton, MainParagraph},
  data() {
    return {
      mainParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.',
      smallTitle: '3D game Dev',
      mainTitle: 'Work that we produce for our clients'
    }
  }
}
</script>

<style scoped lang="scss">
  .first-screen-home-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    .content {
      margin: 203px 0 143px;

      .right-content {
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        max-width: 527px;
        text-align: left;

        .small-title {
          font-size: 20px;
          line-height: 155.2%;
          color: var(--bold-text-color);
          margin-bottom: 17px;
          text-shadow: 3px 3px 2px black;
        }

        .main-title {
          font-size: 50px;
          line-height: 155.2%;
          margin-bottom: 26px;
          text-shadow: 3px 3px 2px black;
        }

        .paragraph {
          max-width: 470px;
          margin-bottom: 50px;
          line-height: 200%;
          text-shadow: 3px 3px 2px black;
        }
      }

      .left-content {
        display: flex;
        position: absolute;
        z-index: 1;
        max-width: 670px;
        top: 0;
        left: 54%;

        .element {
          position: absolute;

          &.one {
            top: 409px;
            right: 40px;
          }

          &.two {
            top: 202px;
          }

          &.three {
            top: 220px;
            left: 340px;
          }
        }
      }
    }
  }


@media (max-width: 768px) {
  .first-screen-home-container {
    .content {
      .left-content {
        left: 20%;
      }
    }
  }
}

  @media (max-width: 480px) {
    .first-screen-home-container {
      .content {
        .left-content {
          left: -30%;
        }
      }
    }
  }

  @media (max-width: 1020px) {
    .first-screen-home-container {
      .content {
        .left-content {
          opacity: 30%;
        }
      }
    }
  }
</style>