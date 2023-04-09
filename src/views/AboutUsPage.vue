<template>
  <first-screen/>
  <reason-work/>
  <about-text/>
  <team-screen/>
</template>

<script>
import FirstScreen from "@/features/AboutUs/FirstScreenAbout.vue";
import ReasonWork from "@/features/AboutUs/ReasonWork.vue";
import AboutText from "@/features/AboutUs/AboutText.vue";
import TeamScreen from "@/features/AboutUs/TeamScreen.vue";

export default {
  name: "AboutUsPage",
  components: {TeamScreen, AboutText, ReasonWork, FirstScreen}
}
</script>

<style scoped>

</style>