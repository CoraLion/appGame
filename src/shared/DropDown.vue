<template>
  <div class="dropdown">
    <button-radius :path-url="null"  class="text-button"
                   @click="activeDropDown = !activeDropDown"><slot/></button-radius>
    <transition name="fade">
      <div class="dropdown-child" v-if="activeDropDown">
        <router-link router :to="text.path"
            v-for="text in textDropDown"
            :key="text.id">
          {{text.text}}
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import ButtonRadius from "@/shared/ButtonRadius.vue";

export default {
  name: "DropDown",
  components: {ButtonRadius},
  props: {
    textDropDown: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      activeDropDown: false
    }
  }
}
</script>

<style scoped lang="scss">

.dropdown {
  position: relative;
  display: flex;

  .text-button {
    border: none;
    cursor: pointer;
    padding:10px;
    z-index: 999;
  }

  .dropdown-child {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(1,1,1,.8);
    top:-255px;bottom:0;left: 0;right: 0;
    max-width: 132px;
    max-height: 300px;
    z-index: 998;

    a {
      color: white;
      padding: 20px;
      text-decoration: none;

      &:hover {
        cursor: pointer;
        color: #757575;
      }
    }
  }
}

.fade-enter-active {
  transition: .3s ease transform, 1s ease opacity;
}
.fade-leave-active {
  transition: 1s ease transform, .3s ease opacity;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(80px);
}
.fade-enter-to{
  opacity: 1;
  transform: translateY(0);
}
</style>