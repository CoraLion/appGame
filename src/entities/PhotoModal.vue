<template>
  <transition-group name="fade-scale">
    <div class="photo-modal-container" v-if="$store.state.activePhotoModal" @click.self="$store.commit('SET_ACTIVE_PHOTO_MODAL',false)">
      <div class="photo-modal-content">
        <div class="cross-content" @click="$store.commit('SET_ACTIVE_PHOTO_MODAL',false)">
          <img :src="getUrl(cross)" alt="cross">
        </div>
        <img :src="getUrl(urlPath + $store.state.objectPhoto.img)" alt="picture">
      </div>
    </div>
  </transition-group>
</template>

<script>
import reusedCode from "@/mixins/reusedCode";
import "@/assets/style/animation.css"
export default {
  name: "PhotoModal",
  props: {
    urlPath: {
      type: String,
      require: true
    },
  },
  mixins: [reusedCode],
  data() {
    return {
      cross: 'plus.svg',
    }
  },
}
</script>

<style scoped lang="scss">
 .photo-modal-container {
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: center;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 999;
   padding: 0 15px;

   .photo-modal-content {
      position: relative;
     max-width: 1080px;
     height: 720px ;

     img {
       border-radius: 30px;
       width: 100%;
       height: 100%;
     }

     .cross-content {
       position: absolute;
       top: -70px;
       left: 0;
       height: 40px;
       transform: rotate(45deg);
       width: 40px;

       &:hover {
         cursor: pointer;
       }
     }
   }
 }

 @media (max-width: 1080px) {
   .photo-modal-container {
     .photo-modal-content {
       max-width: 720px;
       height: 480px;
     }
   }
 }

 @media (max-width: 768px) {
   .photo-modal-container {
     .photo-modal-content {
       max-width: 480px;
       height: 320px;
     }
   }
 }
</style>