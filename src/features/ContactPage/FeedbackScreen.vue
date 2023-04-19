<template>
  <div class="feedback-screen-container">
    <div class="text-content">
      <span class="title">{{mainTitle}}</span>
      <span class="paragraph">{{paragraph}}</span>
    </div>
    <feedback-form/>
    <div class="line">
      <img :src="getUrlContact('line-2.svg')" alt="">
    </div>
  </div>
</template>

<script>
import FeedbackForm from "@/entities/FeedbackForm.vue";

export default {
  name: "FeedbackScreen",
  components: {FeedbackForm},
  data() {
    return {
      mainTitle: 'Say hello',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing .'
    }
  }
}
</script>

<style scoped lang="scss">
  .feedback-screen-container {
    display: flex;
    margin: 0 auto;
    padding: 0 15px;
    max-width: 1218px;
    overflow: hidden;
    flex-direction: column;
    align-items: center;

    .text-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 79px;

      .title {
        font-size: 30px;
        margin-bottom: 15px;
      }
    }
  }
</style>