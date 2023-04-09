<template>
  <div class="trending-container">
    <div class="top-content">
      <main-title-bold class="top-title">Currently Trending Games</main-title-bold>
      <grey-button @click="showGame">SEE ALL</grey-button>
    </div>
    <div class="bottom-content">
      <div class="card">
        <game-card v-for="game in showOnlyFour"
                   :key="game.id"
                   :game-card="game" @click="changeActiveModal(game.id)"/>
        <transition-group name="fade-translate-x" v-if="showAnother.length !== 0">
          <game-card v-for="game in showAnother"
                     :key="game.id"
                     :game-card="game" @click="changeActiveModal(game.id)"/>
        </transition-group>
      </div>
    </div>
    <transition name="fade-opacity" mode="out-in">
    <grey-button class="close-button" v-if="showAllGame" @click="closeGame">CLOSE ALL</grey-button>
    </transition>
  </div>
  <transition name="fade-opacity">
    <game-card-modal :game-card="allGame[activeId]"
                     v-if="activeModal === true"
                     @closeModal="this.activeModal = false"/>
  </transition>
</template>

<script>
import GameCard from "@/entities/GameCard.vue";
import MainTitleBold from "@/shared/MainTitleBold.vue";
import GreyButton from "@/shared/GreyButton.vue";
import ProjectScreen from "@/features/HomePage/ProjectScreen.vue";
import "@/assets/style/animation.css"
import GameCardModal from "@/entities/GameCardModal.vue";
import PhotoModal from "@/entities/PhotoModal.vue";
export default {
  name: "TrendingGames",
  components: {PhotoModal, GameCardModal, ProjectScreen, GreyButton, MainTitleBold, GameCard},
  data() {
    return {
      allGame: [
        {id: 0, img: 'game-1.jpg', title: 'Title 1',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
          follower: '40', imageExtra: [
            {id: 0, img: 'game-1.jpg'},
            {id: 1, img: 'game-1.jpg'},
            {id: 2, img: 'game-1.jpg'},
            {id: 3, img: 'game-1.jpg'},
            {id: 4, img: 'game-1.jpg'},
            {id: 5, img: 'game-1.jpg'},
            {id: 6, img: 'game-1.jpg'},
            {id: 7, img: 'game-1.jpg'},
            {id: 8, img: 'game-1.jpg'},

          ]},
        {id: 1, img: 'game-2.jpg', title: 'Title 2',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
          follower: '40', imageExtra: [
            {id: 0, img: 'game-1.jpg'},
            {id: 1, img: 'game-1.jpg'},
            {id: 2, img: 'game-1.jpg'},
          ]},
        {id: 2, img: 'game-3.jpg', title: 'Title 3',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
          follower: '40', imageExtra: [
            {id: 0, img: 'game-1.jpg'},
            {id: 1, img: 'game-1.jpg'},
            {id: 2, img: 'game-1.jpg'},
          ]},
        {id: 3, img: 'game-4.jpg', title: 'Title 4',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
          follower: '40', imageExtra: [
            {id: 0, img: 'game-1.jpg'},
            {id: 1, img: 'game-1.jpg'},
            {id: 2, img: 'game-1.jpg'},
          ]},
        {id: 4, img: 'game-1.jpg', title: 'Title 5',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
          follower: '40', imageExtra: [
            {id: 0, img: 'game-1.jpg'},
            {id: 1, img: 'game-1.jpg'},
            {id: 2, img: 'game-1.jpg'},
          ]},
        {id: 5, img: 'game-2.jpg', title: 'Title 6',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
          follower: '40', imageExtra: [
            {id: 0, img: 'game-1.jpg'},
            {id: 1, img: 'game-1.jpg'},
            {id: 2, img: 'game-1.jpg'},
          ]},
        {id: 6, img: 'game-3.jpg', title: 'Title 7',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
          follower: '40', imageExtra: [
            {id: 0, img: 'game-1.jpg'},
            {id: 1, img: 'game-1.jpg'},
            {id: 2, img: 'game-1.jpg'},
          ]},
        {id: 7, img: 'game-4.jpg', title: 'Title 8',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
          follower: '40', imageExtra: [
            {id: 0, img: 'game-1.jpg'},
            {id: 1, img: 'game-1.jpg'},
            {id: 2, img: 'game-1.jpg'},
          ]},
        {id: 8, img: 'game-1.jpg', title: 'Title 9',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
          follower: '40', imageExtra: [
            {id: 0, img: 'game-1.jpg'},
            {id: 1, img: 'game-1.jpg'},
            {id: 2, img: 'game-1.jpg'},
          ]},
        {id: 9, img: 'game-2.jpg', title: 'Title 10',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,',
          follower: '40', imageExtra: [
            {id: 0, img: 'game-1.jpg'},
            {id: 1, img: 'game-1.jpg'},
            {id: 2, img: 'game-1.jpg'},
          ]},
      ],
      showAllGame: false,
      activeModal: false,
      activeId: 0
    }
  },
  computed: {
    showOnlyFour() {
        return this.allGame.slice(0,4);
    },
    showAnother() {
      if(this.showAllGame) {
        return this.allGame.slice(5,this.allGame.length);
      } else {
        return 0
      }
    }
  },
  methods: {
    showGame() {
        this.showAllGame = !this.showAllGame;
    },
    closeGame() {
      this.showAllGame = false;
    },
    changeActiveModal(activeId) {
      this.activeModal = true;
      this.activeId = activeId;
    }
  }
}
</script>

<style scoped lang="scss">
 .trending-container {
   display: flex;
   flex-direction: column;
   max-width: 1230px;
   margin: 0 auto;
   padding: 0 15px;

   .top-content {
     margin: 80px 0 58px;
     display: flex;
     flex-direction: row;
     justify-content: space-between;

     .top-title {
       font-size: 31px;
     }
   }

   .bottom-content {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     justify-content: center;
     margin-bottom: 83px;
     overflow-y: scroll;
     overflow-x: hidden;
     max-height: 750px;
     .card {
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       justify-content: center;
     }
   }

   .close-button {
     align-self: center;
   }
 }


</style>