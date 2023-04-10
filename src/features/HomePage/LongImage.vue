<template>
  <div class="long-image-container">
      <main-title-semi-bold class="main-title">{{mainTitle}}</main-title-semi-bold>
    <div class="title-paragraph">
      <main-title-semi-bold class="title">{{smallTitle}}</main-title-semi-bold>
      <main-paragraph>{{paragraph}}</main-paragraph>
    </div>
    <img class="dots" :src="getUrlHome('dots-game-horizantall.svg')" alt="dots"/>
    <div class="big-image">
      <img :src="getUrlHome('game-horizontal.jpg')" alt="horizontal"/>
    </div>
  </div>
</template>

<script>
import MainTitle from "@/shared/MainTitleSemiBold.vue";
import MainParagraph from "@/shared/MainParagraph.vue";
import reusedCode from "@/mixins/reusedCode";
import MainTitleSemiBold from "@/shared/MainTitleSemiBold.vue";

export default {
  name: "LongImage",
  components: {MainTitleSemiBold, MainParagraph, MainTitle},
  mixins: [reusedCode],
  data() {
    return {
      mainTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      smallTitle: 'Lorem Ipsum',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
    }
  }
}
</script>

<style scoped lang="scss">
 .long-image-container {
   overflow-x: hidden;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
   max-width: 1200px;
   margin: 0 auto;
   padding: 0 15px;
   position: relative;

   .main-title {
     margin: 46px 0 67px;
     max-width: 826px;
     font-size: 35px;
     line-height: 65.63px;
   }

   .title-paragraph {
      text-align: left;
      align-self: flex-start;
      max-width: 545px;
     margin-bottom: 46px;

     .title {
        margin-bottom: 32px;
     }
   }
   .big-image {
     position: relative;
     z-index: 2;
     max-width: 1146px;
     width: 100%;
     height: 100%;
     max-height: 462px;
     border-radius: 5px;
     text-align: center;
     overflow: hidden;
     margin-bottom: 157px;

     img {
       width: 100%;
       height: 100%;
     }
   }
   .dots {
     position: absolute;
     z-index: 1;
     max-width: 196px;
     height: 100%;
     width: 100%;
     max-height: 154px;
     top: 38%;
     left: 70%;

     img {
       width: 100%;
       height: 100%;
     }
   }
 }
 
 @media (max-width: 768px) {
   .long-image-content {
     .main-title {
       font-size: 1.75rem;
     }
     .dots {
       top: 40%;
       left: 40%;
     }
   }
 }

 @media (max-width: 480px) {
   .long-image-content {
     .main-title {
       font-size: 1.75rem;
     }
     .dots {
       top: 60%;
     }
   }
 }
</style>