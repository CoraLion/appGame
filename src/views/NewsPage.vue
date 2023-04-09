<template>
  <first-screen/>
  <news-columns-screen/>
</template>

<script>

import FirstScreen from "@/features/NewsPage/FirstScreenNews.vue";
import NewsColumnsScreen from "@/features/NewsPage/NewsColumnsScreen.vue";

export default {
  name: "NewsPage",
  components: { NewsColumnsScreen, FirstScreen},
}
</script>

<style scoped>

</style>