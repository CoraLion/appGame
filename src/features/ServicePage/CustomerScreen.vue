<template>
  <div class="customer-screen-container">
    <div class="customer-content">
      <div class="top-content">
        <span class="main-title">
          {{mainTitle}}
        </span>
        <main-paragraph>{{mainParagraph}}</main-paragraph>
      </div>
      <div class="center-content">
        <reviews-card
            v-for="reviewsItem in reviewsSlice"
            :key="reviewsItem.id"
            :reviews="reviewsItem"/>
      </div>
      <div class="bottom-content">
        <div class="dots-image">
          <img :src="getUrlService('line-and-dots-customer.svg')" alt="">
        </div>
        <div class="arrow-tools">
          <arrow-radius class="arrow-left"
                        :active-arrow="'left'"
                        @click="indexActive === reviews.length-1
                                ? indexActive = 0
                                : indexActive++"/>
          <arrow-radius
              :active-arrow="'right'"
              @click="indexActive !== 0
                                ? indexActive--
                                : indexActive = reviews.length-1"/>
        </div>
      </div>
    </div>
    <span class="customer-background"/>
  </div>
</template>

<script>
import MainParagraph from "@/shared/MainParagraph.vue";
import ReviewsCard from "@/entities/ReviewsCard.vue";
import ArrowRow from "@/shared/ArrowSimple.vue";
import reusedCode from "@/mixins/reusedCode";
import ArrowRadius from "@/shared/ArrowRadius.vue";

export default {
  name: "CustomerScreen",
  computed: {
    reviewsSlice() {
      if(this.indexActive === this.reviews.length-2) {
        console.log('Последний элемент в центре')
        return [this.reviews[this.reviews.length-2], this.reviews[this.reviews.length-1], this.reviews[0]];
      } else if(this.indexActive === this.reviews.length-1) {
        console.log('Последний элемент слева')
        return [this.reviews[this.reviews.length-1], this.reviews[0], this.reviews[1]]
      } else {
        console.log('Без условий')
        return this.reviews.slice(this.indexActive, this.indexActive+3)
      }
    }
  },
  components: {ArrowRadius, ArrowRow, ReviewsCard, MainParagraph},
  data() {
    return {
      mainTitle: 'Trusted by Thousands of Happy Customer',
      mainParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy .',
      reviews: [
        {
          id: 0,
          name: 'Viezh Robert',
          country: 'Warsaw, Poland',
          countGrade: '4.5',
          textReviews: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
          img: 'customer-1.png'
        },
        {
          id: 1,
          name: 'Yessica Christy',
          country: 'Shanxi, China',
          countGrade: '4.5',
          textReviews: 'Lorem Ipsum is simply dummy text of the printing and ',
          img: 'customer-2.png'
        },
        {
          id: 2,
          name: 'Bangchan',
          country: 'Seoul, South Korea',
          countGrade: '4.5',
          textReviews: 'There is piece of pineapple inside my BuRgER',
          img: 'customer-3.png'
        },
        {
          id: 3,
          name: 'Kim Young Jou',
          country: 'Seoul, South Korea',
          countGrade: '4.5',
          textReviews: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'customer-4.png'
        },
        {
          id: 4,
          name: 'Kim Young Jou1',
          country: 'Seoul, South Korea',
          countGrade: '4.5',
          textReviews: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'customer-4.png'
        },
        {
          id: 5,
          name: 'Kim Young Jou2',
          country: 'Seoul, South Korea',
          countGrade: '4.5',
          textReviews: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'customer-4.png'
        },
      ],
      indexActive: 0
    }
  },
  mixins: [reusedCode],
}

</script>

<style scoped lang="scss">
 .customer-screen-container {
   position: relative;
   overflow: hidden;

   .customer-content {
     position: relative;
     z-index: 1;
     max-width: 1330px;
     padding: 0 15px;
     flex-direction: column;
     margin: 0 auto;
     display: flex;
     align-items: center;

     .top-content {
       display: flex;
       flex-direction: column;
       max-width: 448px;
       margin: 55px 0 60px;
       .main-title {
         font-family: 'Rubik-Medium', sans-serif;
         font-size: 35px;
         line-height: 50px;
         margin-bottom: 20px;
       }
     }

     .center-content {
       max-width: 1330px;
       width: 100%;
       display: flex;
       justify-content: space-between;
       flex-direction: row;
       flex-wrap: wrap;
       margin-bottom: 35px;
     }

     .bottom-content {
       display: flex;
       width: 100%;
       flex-direction: row;
       margin-bottom: 75px;
       align-items: center;
       justify-content: space-between;

       .arrow-tools {
         display: flex;
         flex-direction: row;
         margin-right: 200px;

         .arrow-left {
           margin-right: 20px;
         }
       }
     }
   }

   .customer-background {
     content: "";
     position: absolute;
     top: 0;
     left: 0;
     z-index: 0;
     width: 100%;
     height: 100%;
     max-height: 100%;
     background-color: var(--background-brown-color);
   }
 }

 @media (max-width: 1280px) {
   .customer-screen-container {
     .customer-content {
       .center-content {
         justify-content: center;

         div {
           margin: 15px;
         }
       }

       .bottom-content {
         justify-content: center;

         .arrow-tools {
          margin-right: 0;
           margin-left: 15px;
         }
       }
     }
   }
 }
</style>