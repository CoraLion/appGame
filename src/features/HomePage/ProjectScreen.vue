<template>
 <div class="project-screen-container">
   <main-title-bold class="main-title">{{mainTitle}}</main-title-bold>
   <main-paragraph class="paragraph">{{mainParagraph}}</main-paragraph>
   <div class="picture-content">
    <div class="picture-project" v-for="project in imageSix" :key="project.id">
      <img :src="getUrlHome(project.img)" alt="project" @click="openPhotoModal(project.id)">
    </div>
     <transition-group name="fade-translate-x-inverse" v-if="imageShow.length !== 0">
     <div class="picture-project" v-for="project in imageShow" :key="project.id">
       <img :src="getUrlHome(project.img)" alt="project" @click="openPhotoModal(project.id)">
     </div>
     </transition-group>
   </div>
   <grey-button class="button" @click="showProject">
     <transition name="fade-opacity" mode="out-in">
       <span v-if="!showAllProject">SEE ALL</span>
       <span v-else>CLOSE ALL</span>
     </transition>
   </grey-button>
   <photo-modal :url-path="'main-page/'"/>
 </div>
</template>

<script>
import MainTitleBold from "@/shared/MainTitleBold.vue";
import MainParagraph from "@/shared/MainParagraph.vue";
import GreyButton from "@/shared/GreyButton.vue";
import reusedCode from "@/mixins/reusedCode";
import "@/assets/style/animation.css"
import PhotoModal from "@/entities/PhotoModal.vue";
export default {
  name: "ProjectScreen",
  components: {PhotoModal, GreyButton, MainParagraph, MainTitleBold},
  data() {
    return {
      mainTitle: 'Our Recent Projects',
      mainParagraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      showAllProject: false,
      imageProject: [
        {id:0, img: 'apartment-1.jpg'},
        {id:1, img: 'apartment-2.jpg'},
        {id:2, img: 'apartment-3.jpg'},
        {id:3, img: 'apartment-4.jpg'},
        {id:4, img: 'apartment-5.jpg'},
        {id:5, img: 'apartment-6.jpg'},
        {id:6, img: 'apartment-4.jpg'},
        {id:7, img: 'apartment-3.jpg'},
        {id:8, img: 'apartment-5.jpg'},
        {id:9, img: 'apartment-5.jpg'},
        {id:10, img: 'apartment-1.jpg'},
        {id:11, img: 'apartment-2.jpg'},
      ],
      activeIndexImage: 0
    }
  },
  methods: {
    showProject() {
      this.showAllProject = !this.showAllProject;
    },
    openPhotoModal(id) {
      this.activeIndexImage = id;
      this.$store.commit('SET_ACTIVE_PHOTO_MODAL', true)
      this.$store.commit('SET_OBJECT_PHOTO', this.imageProject[this.activeIndexImage])
    },
  },
  computed: {
    imageSix() {
      return this.imageProject.slice(0,6);
    },
    imageShow() {
      if(this.showAllProject) {
        return this.imageProject.slice(6,this.imageProject.length);
      } else {
        return 0
      }
    }
  },
  mixins: [reusedCode]
}
</script>

<style scoped lang="scss">
  .project-screen-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    .main-title {
      margin-top: 141px;
      margin-bottom: 15px;
    }

    .paragraph {
      font-size: 15px;
      margin-bottom: 71px;
    }

    .picture-content {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-bottom: 70px;

        .picture-project {
          overflow: hidden;
          max-width: 34%;
          min-width: 34%;
          height: 223px;
          border-radius: 20px;
          margin: 11.5px;
          img {
            height: 100%;
            width: 100%;

            &:hover {
              cursor: pointer;
            }
          }

          &:nth-child(6n+3) {
            max-width: 26%;
            min-width: 26%;
          }

          &:nth-child(6n+4) {
            max-width: 20%;
            min-width: 20%;
          }
          &:nth-child(6n+5) {
            max-width: 36%;
            min-width: 36%;
          }

          &:nth-child(6n+6) {
            max-width: 38%;
            min-width: 38%;
          }
        }

    }
    .button {
      margin-bottom: 52.5px;
    }
  }
  
  @media (max-width: 768px) {
    .projectscreen-content {
      .picture-content {
        .picture-project {
          height: 150px;
        }
      }
    }
  }
</style>