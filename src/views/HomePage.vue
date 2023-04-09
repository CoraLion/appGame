<template>
  <first-screen/>
  <trending-games/>
  <long-image/>
  <type-of-games/>
  <project-screen/>
</template>

<script>


import FirstScreen from "@/features/HomePage/FirstScreenHome.vue";
import TrendingGames from "@/features/HomePage/TrendingGames.vue";
import LongImage from "@/features/HomePage/LongImage.vue";
import TypeOfGames from "@/features/HomePage/TypeOfGames.vue";
import ProjectScreen from "@/features/HomePage/ProjectScreen.vue";

export default {
  name: "HomePage",
  components: {ProjectScreen, TypeOfGames, LongImage, TrendingGames, FirstScreen}
}
</script>

<style scoped>

</style>