<template>
    <div class="wrapper">
      <main-header/>
      <main>
        <router-view/>
      </main>
    </div>
    <main-footer/>
</template>

<script>
import MainFooter from "@/widgets/MainFooter.vue";
import MainHeader from "@/widgets/MainHeader.vue";

export default {
  name: "MainLayout",
  components: {MainHeader, MainFooter},
}
</script>

<style scoped>
.wrapper {
  flex: 1 0 auto;
}
</style>