<template>
      <div class="interaction-content">
        <div class="top-content">
          <main-title-semi-bold class="top-title">{{ mainTitle }}</main-title-semi-bold>
          <main-paragraph> {{mainParagraph}} </main-paragraph>
        </div>
        <div class="bottom-content">
          <div class="bottom-left-content">
            <main-title-semi-bold class="title">{{ twoTitle }}</main-title-semi-bold>
            <main-paragraph  class="paragraph">{{twoParagraph}}</main-paragraph>
          </div>
            <main-input :placeholder-input="'Enter email address'">Continue</main-input>
        </div>
      </div>
</template>

<script>
import MainParagraph from "@/shared/MainParagraph.vue";
import MainInput from "@/shared/MainInput.vue";
import MainTitleSemiBold from "@/shared/MainTitleSemiBold.vue";

export default {
  name: "InteractionScreen",
  components: {MainTitleSemiBold, MainInput, MainParagraph},
  data() {
    return {
      mainTitle: 'Lorem Ipsum',
      mainParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      twoTitle: 'Stay in the loop',
      twoParagraph: 'Subscribe to receive the latest news and updates about TDA. We promise not to spam you!'
    }
  }
}
</script>

<style scoped lang="scss">
      .interaction-content {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        min-height: 608px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;

        .top-content {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          text-align: left;
          margin-bottom: 74px;
          max-width: 545px;
          margin-top: 52.5px;
          .top-title {
            margin-bottom: 32px;
          }
        }

        .bottom-content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          padding: 40px 50px;
          margin-bottom: 163px;
          border-radius: 15px;
          max-width: 1170px;
          background-color: var(--background-brown-color);

          .bottom-left-content {
            display: flex;
            flex-direction: column;
            text-align: left;
            max-width: 636px;
            margin-right: 42px;

            .title {
              margin-bottom: 10px;
              font-family: 'Poppins-Medium', sans-serif;
            }

            .paragraph {
              font-size: 17px;
            }
          }
        }
      }

  @media (max-width: 1280px) {
        .interaction-content  {
          flex-direction: column;
          .bottom-content {
            .bottom-left-content {
              margin-bottom: 15px;
            }
          }
        }
      }
</style>