<template>
  <div class="first-screen-services-container">
    <start-title-page :name-page="namePage" :main-title="mainTitle" :paragraph="paragraph"/>
    <div class="count-various">
      <div class="type-various" v-for="item in variousItem" :key="item.id" >
          <div class="img-various-content">
            <img class="img-various" :src="getUrlService(item.img)" alt="">
          </div>
          <div class="text-various">
            <span class="count">
              {{item.count}}
            </span>
            <span class="title">{{item.title}}</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import StartTitlePage from "@/shared/StartTitlePage.vue";

export default {
  name: "FirstScreen",
  components: {StartTitlePage},
  data() {
    return {
      mainTitle: 'Lorem Ipsum is simply dummy text of the printing and.',
      namePage: 'Services',
      paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      variousItem: [
        {
          id: 0,
          title: 'Clients',
          count: '90+',
          img: 'client-vector.svg'
        },
        {
          id: 1,
          title: 'Countries',
          count: '30+',
          img: 'counties-vector.svg'
        },
        {
          id: 2,
          title: 'Projects',
          count: '50+',
          img: 'project-vector.svg'
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .first-screen-services-container {
    display: flex;
    flex-direction: column;
    max-width: 1170px;
    margin: 0 auto;
    align-items: center;
    padding: 0 15px;

    .count-various {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 1140px;
      width: 100%;
      margin: 45px 0 42px;
      padding: 37px;
      min-height: 200px;
      background-color: var(--background-brown-color);
      border-radius: 10px;

      .type-various {
        display: flex;
        align-items: center;
        flex-direction: row;
        max-height: 65px;

        .text-various {
          display: flex;
          flex-direction: column;
          text-align: left;

          .count {
            font-family: 'Rubik-Bold', sans-serif;
            font-size: 25px;
            margin-bottom: 5px;
          }

          .title {
            font-family: 'Rubik-Regular', sans-serif;
            font-size: 20px;
          }
        }

        .img-various-content {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #FFECEC;
          border-radius: 55px;
          min-height: 55px;
          height: 100%;
          width: 100%;
          min-width: 55px;
          margin-right: 36.5px;
          .img-various {
            max-height: 24px;
            max-width: 24px;
          }
        }

        &:after {
          content: "";
          background-color: rgba(165, 165, 165, 1);
          height: 125px;
          width: 2px;
          border-radius: 30px;
          margin: 0 118px 0 113px;
        }

        &:last-child:after {
          content: none;
        }
      }

    }
  }

  @media (max-width: 1280px) {
    .first-screen-services-container {
      .count-various {
        max-width: 768px;

        .type-various:after {
          margin: 0 30px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .first-screen-services-container {
      .count-various {
        flex-direction: column;
        align-items: flex-start;

        .type-various:nth-child(2) {
          flex-direction: row-reverse;
          margin: 15px;
          align-self: flex-end;

          .img-various-content {
            margin-right: 0;
            margin-left: 36.5px;
          }
        }
        .type-various:after {
          height: 50px;
        }

        .type-various:last-child:after {
          content: "";
        }
      }
    }
  }
</style>