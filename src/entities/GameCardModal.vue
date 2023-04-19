<template>
  <div class="game-card-modal-container" @click.self="closeModalCard">
    <div class="game-card-modal-content">
      <div class="image-game">
        <img :src="getUrlHome(gameCard.img)" alt="game">
      </div>
      <div class="right-content">
        <main-title-bold class="title">{{gameCard.title}}</main-title-bold>
        <main-paragraph class="paragraph">{{gameCard.text}}</main-paragraph>
        <div class="text-game">
          <img class="burn" :src="getUrlHome('burn.svg')" alt="burn"/>
          {{gameCard.follower}} Followers
        </div>
        <div class="extra-image-container">
          <div class="image-game extra" v-for="game in gameCard.imageExtra">
            <img @click="openPhotoModal(game.id)" :src="getUrlHome(game.img)" alt="game">
          </div>
        </div>
        <button-radius class="button-modal" @click="closeModalCard" :path-url="null">Close</button-radius>
      </div>
    </div>
    <photo-modal :url-path="'main-page/'"/>
    </div>
</template>

<script>
import MainTitleBold from "@/shared/MainTitleBold.vue";
import MainParagraph from "@/shared/MainParagraph.vue";
import ButtonRadius from "@/shared/ButtonRadius.vue";
import PhotoModal from "@/entities/PhotoModal.vue";
import {mapActions} from "vuex";

export default {
  name: "GameCardModal",
  components: {PhotoModal, ButtonRadius, MainParagraph, MainTitleBold},
  props: {
    gameCard: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      activeIndexImage: 0,
      activeImage: false
    }
  },
  methods: {
    ...mapActions(['OBJECT_PHOTO', 'ACTIVE_PHOTO_MODAL']),

    closeModalCard() {
      this.$emit('closeModal')
    },
    openPhotoModal(id) {
      this.activeIndexImage = id;
      this.ACTIVE_PHOTO_MODAL(true)
      this.OBJECT_PHOTO(this.gameCard.imageExtra[this.activeIndexImage])
    },
  }
}
</script>

<style scoped lang="scss">
.game-card-modal-container {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0; left: 0; right: 0;
  bottom: 0;
  padding: 0 30px;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.5);


  .game-card-modal-content {
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: center;
    text-align: left;
    background-color: var(--background-black-color);
    max-width: 1080px;
    width: 100%;
    border-radius: 30px;
    padding: 50px;

    .image-game {
      position: relative;
      max-width: 400px;
      height: 600px;
      border-radius: 20px;
      overflow: hidden;
      text-align: center;
      margin-right: 40px;
      transition: all .5s;

      img {
        width: 100%;
        height: 100%;
      }

      &.extra {
        margin-right: 15px;
        min-width: 130px;
        height: 100px;

        &:hover {
          cursor: pointer;
        }
      }

      &.extra:last-child {
        margin: 0;
      }
    }


    .right-content {
      display: flex;
      flex-direction: column;

      .title {
        margin-bottom: 20px;
      }

      .paragraph {
        margin-bottom: 15px;
        height: 250px;
        overflow-y: scroll;
      }

      .text-game {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        font-family: 'Rubik-Medium', sans-serif;
        font-size: 22px;
        margin-bottom: 15px;

        .burn {
          margin: 9px;
        }
      }

      .extra-image-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 40px;
        max-width: 540px;
        max-height: 122px;
        overflow-x: scroll;

        &::-webkit-scrollbar {
          height: 5px;
        }
      }

      .button-modal {
        align-self: flex-end;
      }
    }
  }
}

@media (max-width: 1024px) {
  .game-card-modal-container {
    .game-card-modal-content {
      display: block;
      max-width: 480px;
      padding: 30px;

      .image-game {
        max-width: 480px;
        width: 100%;
        height: 300px;
        margin-right: 0;
        margin-bottom: 15px;

        &.extra {
          height: 100px;
          width: 100px;
          margin: 0 15px;
        }
      }

      .right-content {
        .paragraph {
          margin-bottom: 5px;
        }
      }
    }
  }
}


</style>