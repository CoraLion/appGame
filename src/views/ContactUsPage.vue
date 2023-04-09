<template>
  <first-screen-contact/>
  <feedback-screen/>
</template>

<script>
import FirstScreenContact from "@/features/ContactPage/FirstScreenContact.vue";
import FeedbackScreen from "@/features/ContactPage/FeedbackScreen.vue";

export default {
  name: "ContactUsPage",
  components: {FeedbackScreen, FirstScreenContact}
}
</script>

<style scoped>

</style>