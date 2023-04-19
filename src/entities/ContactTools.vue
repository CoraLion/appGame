<template>
 <div class="contact-tools-container">
   <div class="content left">
      <span class="title-contact">
        {{leftText}}
      </span>
     <social-network-tools :type-color="'white'"/>
   </div>
   <div class="content center"
        v-for="item in dataText"
        :key="item.id">
     <img :src="getUrlContact(item.img)" alt="">
     <span class="text-contact">{{item.text}}</span>
   </div>
 </div>
</template>

<script>
import SocialNetworkTools from "@/shared/SocialNetworkTools.vue";

export default {
  name: "ContactTools",
  components: {SocialNetworkTools},
  data() {
    return {
      leftText: 'Follow us',
      dataText: [
        {
          id:0,
          text: '+94 4444 5555 6',
          img: 'phone.svg'
        },
        {
          id:0,
          text: 'but also the leap into electronic typesetting',
          img: 'placeholder.svg'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .contact-tools-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1188px;
    width: 100%;
    min-height: 100px;
    text-align: left;
    justify-content: center;
    align-items: center;


    .content {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .left {
      flex-direction: column;
      align-items: flex-start;
      margin-right: 97px;

      .title-contact {
        margin-bottom: 18px;
      }
    }

    .center {
      display: flex;
      flex-direction: row;
      max-width: 500px;
      max-height: 30px;

      .text-contact {
        font-family: 'Poppins-Light', sans-serif;
        font-size: 20px;
        margin-left: 25px;
        line-height: 30px;
      }

      &:before {
        content: "";
        background-color: rgb(165, 165, 165);
        height: 100px;
        width: 2px;
        border-radius: 30px;
        margin-right: 70px;
      }

      &:last-child:before {
        margin-left: 50px;
      }
    }
  }
  
  @media (max-width: 1280px) {
    .contact-tools-container {
      max-width: 900px;

      .center:last-child:before {
        display: none;
      }

      .center:last-child {
        margin-top: 50px;
      }
    }
  }

  @media (max-width: 768px) {
    .contact-tools-container {
      max-width: 300px;

      .left {
        align-items: center;
        margin-right: 0;
      }

      .center {
        margin-top: 50px;

        &:before {
          display: none;
        }
      }
    }
  }
</style>