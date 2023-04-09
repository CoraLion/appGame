<template>
  <div class="scroll-container" :class="direction === 'column' ? 'column' : 'row'">
    <transition-group name="fade-translate-x" v-if="filterNews.length !== 0">
      <news-card-abridged
          class="card-sub-news"
          v-for="news in filterNews"
          :key="news.id"
          :news-card="news"
          :button-style="direction"
          :class="activeItem === news.id ? 'active-id' : 'not-active-id' "/>
    </transition-group>
    <transition name="fade-opacity" v-else>
      <main-title-semi-bold>{{errorNews}}</main-title-semi-bold>
    </transition>
  </div>
</template>

<script>
import NewsCardAbridged from "@/entities/NewsCardAbridged.vue";
import MainTitleSemiBold from "@/shared/MainTitleSemiBold.vue";

export default {
  name: "ScrollColumnNews",
  components: {MainTitleSemiBold, NewsCardAbridged},
  props: {
    newsArray: {
      type: Array,
      require: true
    },
    direction: {
      type: String,
      require: true
    },
    activeItem: {
      type: Number,
      require: false
    }
  },
  data() {
    return {
      errorNews: 'OOPS! No news with this title :(',
    }
  },
  computed: {
    filterNews() {
      let searchText = this.$store.state.textSearchNews
      if(searchText !== '') {
        return this.newsArray.filter(item => item.mainTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
      } else {
        return this.newsArray;
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .scroll-container {
      display: flex;
      max-height: 1641px;
      max-width: 612px;
      padding: 15px;
      width: 100%;
      margin: 51px 0 100px;
      border-radius: 30px;

      &.row {
        background-color: var(--background-black-color);
        max-width: 1440px;
        height: 460px;
        overflow-x: scroll;
        align-items: center;
        flex-direction: row;

        .card-sub-news {
          margin-left: 30px;
          margin-right: 30px;
          flex-direction: column;
          position: relative;

          &.active-id {

            &:before {
              content: '';
              opacity: 0;
              position: absolute;
              background-color: white;
              height:100%;
              width: 130%;
              left: -30px;
              bottom: 0;
              z-index: 1;
            }
          }

          &.not-active-id {
            &:before {
              content: '';
              visibility: visible;
              position: absolute;
              height:100%;
              width: 130%;
              left: -30px;
              bottom: 0;
              z-index: 1;
              background-color: rgba(7, 7, 7, 0.55);
              transition: all .1s ease;
            }

            &:hover:before {
              opacity: 0;
              visibility: hidden;
            }
          }

          &:last-child {
            margin-right: 0;
          }
        }
      }

      &.column {
        overflow-y: scroll;
        flex-direction: column;

        .card-sub-news {
          margin-bottom: 60px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }


</style>