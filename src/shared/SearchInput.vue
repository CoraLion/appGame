<template>
  <div class="search-container">
    <div class="glass-search">
      <img :src="getUrl('glass.svg')" alt="" class="glass">
    </div>
    <input class="text-search" :placeholder="placeHolder" v-model="textSearch">
  </div>
</template>

<script>

import {mapActions} from "vuex";

export default {
  ...mapActions(['TEXT_SEARCH_NEWS']),
  name: "SearchInput",
  props: {
    placeHolder: {
      type: String,
      require: true
    },
  },
  data() {
    return {
      textSearch: ''
    }
  },
  watch: {

    textSearch() {
      this.$store.dispatch('TEXT_SEARCH_NEWS',this.textSearch)
    },
    '$route.path'() {
      this.textSearch = ''
    }
  }
}
</script>

<style scoped lang="scss">
  .search-container {
    display: flex;
    max-width: 400px;
    width: 100%;
    min-height: 49px;
    padding: 10px 25px;
    align-items: center;
    background-color: var(--background-brown-color);
    border-radius: 10px;

    .glass-search {
      display: flex;
      width: 15px;
      height: 15px;
      align-items: center;
    }

    .text-search {
      margin-left: 14px;
      font-size: 16px;
      color: var(--white);
      width: 100%;
    }

    input::placeholder {
      color: var(--white);
    }
  }
</style>