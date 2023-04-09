<template>
  <div class="reviews-card-container">
    <div class="top-content">
        <div class="avatar">
          <img :src="getUrlService(reviews.img)" alt="avatar">
        </div>
      <div class="name-and-country">
        <div class="name-customer">
            {{reviews.name}}
        </div>
        <div class="country-customer">
          {{reviews.country}}
        </div>
      </div>
      <div class="grade-content">
        <div class="count-grade">
          {{reviews.countGrade}}
        </div>
        <div class="star-grade">
         <img :src="getUrlService('star-customer.svg')" alt="star">
        </div>
      </div>
    </div>
    <div class="bottom-content">
      {{reviews. textReviews}}
    </div>
  </div>
</template>

<script>
import reusedCode from "@/mixins/reusedCode";

export default {
  name: "ReviewsCard",
  props: {
    reviews: {
      type: Object,
      require: true
    },
  },
  mixins: [reusedCode]
}
</script>

<style scoped lang="scss">
  .reviews-card-container {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 2px solid var(--grey);
    padding: 30px;
    max-width: 400px;
    min-height: 230px;
    height: 100%;
    width: 100%;

    .top-content {
      text-align: left;
      display: flex;
      flex-direction: row;
      max-width: 340px;
      margin-bottom: 8px;
      .avatar {
        margin-right: 20px;
        max-height: 50px;
        max-width: 50px;
        overflow: hidden;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name-and-country {
        width: 100%;

        .name-customer {
          font-family: 'Rubik-Medium', sans-serif;
          font-size: 18px;
        }
        .country-customer {
          font-family: 'Rubik-Regular', sans-serif;
          font-size: 14px;
          color: #4F5665;
        }
      }
      .grade-content {
        display: flex;
        flex-direction: row;

        .count-grade {
          margin-right: 10px;
        }
      }
    }
    .bottom-content {
      text-align: left;
      max-height: 100px;
      overflow-y: scroll;
    }

    &:nth-child(2) {
      background-color: var(--background-total-brown-color);
      border-color: var(--main-orange-dark);
    }
  }

</style>