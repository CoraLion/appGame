<template>
  <first-screen/>
  <video-screen/>
  <info-screen/>
  <customer-screen/>
</template>

<script>
import FirstScreen from "@/features/ServicePage/FirstScreenServices.vue";
import VideoScreen from "@/features/ServicePage/VideoScreen.vue";
import InfoScreen from "@/features/ServicePage/InfoScreen.vue";
import CustomerScreen from "@/features/ServicePage/CustomerScreen.vue";

export default {
  name: "ServicesPage",
  components: {CustomerScreen, InfoScreen, VideoScreen, FirstScreen}
}
</script>

<style scoped>
</style>