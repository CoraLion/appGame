<template>
  <header class="header">
      <div class="content">
        <div class="logo-content">
          <main-logo
              :active-size="false">LOGO</main-logo>
        </div>
        <div class="menu-content">
          <menu-burger/>
        </div>
      </div>
  </header>
</template>

<script>
import MainLogo from "@/shared/MainLogo.vue";
import MenuBurger from "@/entities/MenuBurger.vue";
import ProjectScreen from "@/features/HomePage/ProjectScreen.vue";

export default {
  name: "MainHeader",
  components: {ProjectScreen, MenuBurger, MainLogo},
}
</script>

<style scoped lang="scss">
   .header {
     background: linear-gradient(to bottom, #000000 10%, transparent 100%);
     position: fixed;
     top: 0;
     left: 0;
     min-width: 100%;
     z-index: 997;
     transition: .2s all;
       .content {
         display: flex;
         min-height: 138px;
         max-width: 1440px;
         padding: 0 55px;
         margin: 0 auto;
         justify-content: space-between;
         align-items: center;
       }

     .menu-content {
       max-width: 680px;
       width: 100%;
     }
   }

   @media (max-width: 480px) {
      .header  {
        .container {
          .content {
            padding: 0 15px;
          }
        }
      }
   }
</style>