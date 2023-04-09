<template>
  <div class="reason-work-container">
    <main-title-semi-bold class="main-title">{{mainTitle}}</main-title-semi-bold>
    <div class="reason-container">
      <div class="reason-content" v-for="reason in reasonWhy" :key="reason.id">
        <div class="small-title-reason">
          {{reason.smallTitle}}
        </div>
        <div class="main-title-reason">
          {{reason.mainTitle}}
        </div>
        <div class="paragraph-reason">
          {{reason.paragraph}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainTitleSemiBold from "@/shared/MainTitleSemiBold.vue";

export default {
  name: "ReasonWork",
  components: {MainTitleSemiBold},
  data() {
    return {
      mainTitle: 'Why work with us',
      reasonWhy: [
        {id: 0,
          smallTitle: 'Lorem ipsum',
          mainTitle: 'Lorem Ipsum',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and ' +
              'typesetting industry. Lorem Ipsum has been the industry`s ' +
              'standard dummy text ever since the 1500s,'},
        {id: 1,
          smallTitle: 'Lorem ipsum2',
          mainTitle: 'Lorem Ipsum',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and ' +
              'typesetting industry. Lorem Ipsum has been the industry`s ' +
              'standard dummy text ever since the 1500s,'},
        {id: 2,
          smallTitle: 'Lorem ipsum3',
          mainTitle: 'Lorem Ipsum',
          paragraph: 'Lorem Ipsum is simply dummy text of the printing and ' +
              'typesetting industry. Lorem Ipsum has been the industry`s ' +
              'standard dummy text ever since the 1500s,'}
      ],
    }
  }
}
</script>

<style scoped lang="scss">
  .reason-work-container {
    display: flex;
    flex-direction: column;
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 15px;

    .main-title {
      margin: 36px 0 63px;
      text-align: left;
      font-size: 25px;
    }

    .reason-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 147px;
      justify-content: space-between;

      .reason-content {
        display: flex;
        flex-direction: column;
        max-width: 378px;
        min-height: 348px;
        padding: 64px 37px;
        background-color: var(--background-brown-color);
        border-radius: 20px;
        text-align: left;
        justify-content: space-between;

        .small-title-reason {
          font-size: 14px;
          padding: 7px 14px;
          max-width: 140px;
          min-height: 39px;
          margin-bottom: 19px;
          border-radius: 8px;
          background-color: rgba(176, 0, 220, 0.11);
        }

        .main-title-reason {
          border-radius: 20px;
          margin-bottom: 16px;
          font-size: 20px;
        }

        .paragraph-reason {
          font-size: 14px;
          line-height: 187.5%;
        }

        &:nth-child(3n+1) {
          .small-title-reason {
            background-color: rgba(176, 0, 220, 0.11);
          }
        }

        &:nth-child(3n+2) {
          .small-title-reason {
            background-color: rgba(220, 66, 0, 0.11);
          }
        }

        &:nth-child(3n+3) {
          .small-title-reason {
            background-color: rgba(0, 220, 141, 0.11);
          }
        }
      }
    }
  }

  @media (max-width: 1280px) {
    .reason-work-container {
      .reason-container {
        justify-content: center;
        .reason-content {
          margin: 15px;
        }
      }
    }
  }
</style>