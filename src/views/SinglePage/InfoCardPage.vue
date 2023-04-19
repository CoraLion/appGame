<template>
  <div class="info-card-full-container">
    <div class="top-content">
      <img :src="getUrlService(infoGame.img)" alt="">
    </div>
    <div class="bottom-content">
      <span class="main-title">
          {{infoGame.mainTitle}}
      </span>
      <span class="paragraph main">{{infoGame.mainText}}</span>
      <span class="paragraph more">{{infoGame.moreText}}</span>
      <div class="navigation-tools">
        <arrow-radius class="arrow-left" @click="changePost('left')" :active-arrow="'left'"/>
        <button-link :active-link="'/services'">{{textButton}}</button-link>
        <arrow-radius class="arrow-right" @click="changePost('right')" :active-arrow="'right'"/>
      </div>
    </div>
  </div>
</template>



<script>
import ArrowRow from "@/shared/ArrowSimple.vue";
import ArrowRadius from "@/shared/ArrowRadius.vue";
import ButtonLink from "@/shared/ButtonLink.vue";

export default {
  name: "InfoCardPage",
  components: {ButtonLink, ArrowRadius, ArrowRow},
  data() {
    return {
      textButton: 'Back',
      routeId: '',
    }
  },
  computed: {
    routeId() {
      return this.routeId = Number(this.$route.params.id);
    },
    infoGame() {
      return this.$store.state.infoGame.find(item => item.id ===  +this.routeId)
    },
    lengthInfoGame() {
      return (this.$store.state.infoGame.length)-1;
    }
  },
  methods: {
    changePost(chance) {
      if(chance === 'right') {
        if(this.routeId === this.lengthInfoGame) {
          this.routeId = 0;
          this.pushId();
        } else if (this.routeId < this.lengthInfoGame) {
          this.routeId++;
          this.pushId();
        }
      } else {
        if(this.routeId !== 0) {
          this.routeId--;
          this.pushId();
        } else {
          this.routeId = this.lengthInfoGame;
          this.pushId();
        }
      }
    },
    pushId() {
      this.$router.push({ name: 'ServicesInfoCard', params: { id: this.routeId } })
    }
  }
}
</script>

<style scoped lang="scss">
.info-card-full-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;

  .bottom-content {
    max-width: 1170px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 163px;

    .main-title {
      font-size: 30px;
      font-family: 'Poppins-Medium', sans-serif;
      line-height: 45px;
      margin-bottom: 50px;
    }

    .paragraph {
      font-size: 17px;
      text-align: left;

      &.main {
        margin-bottom: 50px;
      }

      &.more {
        margin-bottom: 46px;
      }
    }

    .navigation-tools {
      display: flex;
      flex-direction: row;

      .arrow-left {
        margin-right: 20px;
      }

      .arrow-right {
        margin-left: 20px;
      }
    }
  }

  .top-content {
    margin: 140px 0 50px;
    display: flex;
    max-width: 1080px;
    max-height: 489px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    img {
      width: 150%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>