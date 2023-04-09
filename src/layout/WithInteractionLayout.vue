<template>
  <router-view/>
  <interaction-screen/>
</template>

<script>
import InteractionScreen from "@/features/InteractionScreen.vue";

export default {
  name: "WithInteractionLayout",
  components: {InteractionScreen}
}
</script>

<style scoped>

</style>