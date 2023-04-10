<template>
  <div class="header-menu">
      <div class="menu-text-screen"
           v-for="menu in menu_slice"
           :key="menu.id"
           v-if="!activeMenuBurger">
        <header-menu-text
            :menu-item="menu"
            @activeIndex="activeMenuText"
            :index-active="indexActive"/>
      </div>
    <div class="menu-text-phone" v-else>
      <div class="button-menu" @click="activeBurgerPop"
           :class="activePlus ? 'active-plus' : 'not-active-plus'">
        <img :src="getUrl('plus.svg')" alt="menu"/>
      </div>
      <transition name="fade">
        <div class="menu-burger" v-if="activeBurger">
          <header-menu-text
              v-for="menu in menu_slice"
              :key="menu.id"
              :menu-item="menu"
              @activeIndex="activeMenuText"
              :index-active="indexActive"/>
        </div>
      </transition>
    </div>
    <button-radius :path-url="menu_text[menu_text.length-1].path"
                   @click="activeMenuText(menu_text[menu_text.length-1].id)"
                   :class="indexActive === this.menu_text[menu_text.length-1].id
                   ? 'active-button'
                   : 0">
      {{ menu_text[menu_text.length - 1].text_menu }}
    </button-radius>
  </div>
</template>

<script>
import HeaderMenuText from "@/shared/HeaderMenuText.vue";
import ButtonRadius from "@/shared/ButtonRadius.vue";

export default {
  name: "MenuBurger",
  components: {ButtonRadius, HeaderMenuText},
  data() {
    return {
      menu_text: [
        {
          id: 0,
          text_menu: 'Home',
          path: '/'
        },
        {
          id: 1,
          text_menu: 'About Us',
          path: '/aboutUs'
        },
        {
          id: 2,
          text_menu: 'Portfolio',
          path: '/services'

        },
        {
          id: 3,
          text_menu: 'News',
          path: '/news'
        },
        {
          id: 4,
          text_menu: 'Contact us',
          path: '/contact'
        },
      ],
      activeMenuBurger: true,
      activeBurger: false,
      activePlus: false
    }
  },
  computed: {
    menu_slice() {
      return this.menu_text.slice(0, this.menu_text.length - 1)
    },
    indexActive() {
      return this.$store.state.indexActiveHeader;
    }
  },

  methods: {
    getUrl(picture) {
      return require('../assets/' + picture)
    },
    resizeWindow() {
      if(window.innerWidth < 1024) {
        this.activeMenuBurger = true;
      } else {
        this.activeMenuBurger = false;
        this.activeBurger = false;
        this.activePlus = false;
      }
    },
    activeMenuText(indexActive) {
      this.$store.commit('SET_HEADER_ACTIVE', indexActive)
      this.activeBurger = false;
      this.activePlus = false;
    },
    activeBurgerPop() {
      this.activeBurger = !this.activeBurger
      this.activePlus = !this.activePlus
    }
  },

  mounted() {
    window.addEventListener('resize', this.resizeWindow)
    this.resizeWindow();
  },
  created() {
    this.menu_text.forEach((item) => {
      if(item.path === this.$route.path) {
        this.$store.commit('SET_HEADER_ACTIVE', item.id)
      }
    })
  },
  unmounted() {
    window.removeEventListener('resize', this.resizeWindow)
  }
}
</script>

<style scoped lang="scss">
.header-menu {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  min-height: 42px;

  .menu-text-screen {
    max-width: 75px;
    margin-right: 88px;

    &:nth-last-child(-n + 2) {
      margin-right: 35px;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .menu-text-phone {
    position: relative;
    display: flex;
    justify-content: space-between;

    .button-menu {
      position: relative;
      width: 40px;
      max-height: 40px;
      z-index: 999;
      margin: 0 15px;

      img {
        width: 100%;
        height: 100%;
      }

      &:hover {
        cursor: pointer;
      }
    }

    .menu-burger {
      position: absolute;
      min-width: 300px;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      top:121px;left:-100px;bottom: 0;
      background: radial-gradient(#000000 10%, transparent 90%);
    }
  }

  .active-plus {
    transform: rotate(45deg);
    transition: transform .2s;
  }
  .not-active-plus {
    transform: rotate(0);
    transition: transform .2s;
  }

  .active-button {
    background-color: var(--main-orange-dark);
  }

  .fade-enter-active {
    transition: .5s ease transform, 1s ease opacity;
  }
  .fade-leave-active {
    transition: 2s ease transform, 1s ease opacity;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: translateX(1000px);
  }
  .fade-enter-to{
    opacity: 1;
    transform: translateX(0);
  }
}
</style>