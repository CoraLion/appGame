<template>
  <div class="first-screen-about-content">
    <div class="left-content">
      <name-of-page class="name-of-page">{{ namePage }}</name-of-page>
      <main-title-bold class="main-title">{{mainTitle}}</main-title-bold>
      <main-paragraph class="paragraph">{{paragraph}}</main-paragraph>
      <gradient-button>
        Get in touch
        <arrow class="arrow" :active-arrow="'right'"/>
      </gradient-button>
    </div>
    <slider-about class="right-content" :photo-slider="photoSlider"/>
  </div>
</template>

<script>
import NameOfPage from "@/shared/NameOfPage.vue";
import MainParagraph from "@/shared/MainParagraph.vue";
import GradientButton from "@/shared/GradientButton.vue";
import Arrow from "@/shared/ArrowSimple.vue";
import SliderAbout from "@/entities/SliderAbout.vue";
import MainTitleBold from "@/shared/MainTitleBold.vue";
import ProjectScreen from "@/features/HomePage/ProjectScreen.vue";

export default {
  name: "FirstScreen",
  components: {ProjectScreen, MainTitleBold, SliderAbout, Arrow, GradientButton, MainParagraph, NameOfPage},
  data() {
    return {
      mainTitle: 'Lorem Ipsum is simply dummy text of the printing and.',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s.',
      photoSlider: [
        {id: 0, img: 'cat-full.jpg', text: '1'},
        {id: 1, img: 'game-2.jpg', text: '2'},
        {id: 2, img: 'cat-full.jpg', text: '3'},
        {id: 3, img: 'game-2.jpg', text: '4'},
      ],
      namePage: 'About Us'
    }
  }
}
</script>

<style scoped lang="scss">
 .first-screen-about-content {
   display: flex;
   align-items: center;
   max-width: 1440px;
   padding: 0 15px;
   margin: 0 auto;
   justify-content: space-between;

   .left-content {
     display: flex;
     max-width: 425px;
     width: 100%;
     flex-direction: column;
     justify-content: space-between;
     margin: 186px 0 150px 110px;
     text-align: left;
     .name-of-page {
       max-width: 425px;
       margin-top: 28px;
       margin-bottom: 38px;
       font-size: 12px;
     }

     .main-title {
       max-width: 425px;
       margin-bottom: 25px;
     }

     .paragraph {
       max-width: 425px;
       margin-bottom: 58px;
     }

     .button-round {
       .arrow {
         margin-left: 20px;
         fill: var(--white);
       }
     }
   }

   .right-content {
     margin-top: 140px;
   }
 }
 
 @media (max-width: 1024px) {
   .first-screen-about-content {
     .left-content {
       margin-left: 0;
       margin-bottom: 0;
       margin-top: 140px;
     }
     flex-direction: column;
   }
 }

</style>