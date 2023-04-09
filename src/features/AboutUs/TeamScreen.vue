<template>
  <div class="team-screen-container">
    <main-title-semi-bold class="title">
      {{mainTitle}}
    </main-title-semi-bold>
    <div class="team-container" v-if="activeScreen">
      <div class="team-content" v-for="command in commandAll">
        <member-team-card :command="command"/>
      </div>
    </div>
    <div class="team-container" v-else>
        <div class="team-content">
          <div v-for="command in commandAll">
            <transition name="fade-translate-x"  mode="out-in">
              <member-team-card v-if="command.id === indexActive" :command="command"/>
            </transition>
          </div>
      </div>
      <gray-switch class="switch" :array-length="commandAll.length" @changeActiveIndex="changeActiveItem"/>
    </div>
  </div>
</template>

<script>
import reusedCode from "@/mixins/reusedCode";
import MainTitleSemiBold from "@/shared/MainTitleSemiBold.vue";
import GraySwitch from "@/shared/GraySwitch.vue";
import MemberTeamCard from "@/entities/MemberTeamCard.vue";
import "@/assets/style/animation.css"
export default {
  name: "TeamScreen",
  components: {MemberTeamCard, GraySwitch, MainTitleSemiBold},
  mixins: [reusedCode],
  data() {
    return {
      mainTitle: 'Our Team',
      commandAll: [
        {id: 0, img: 'John.png', name: 'John peter', type: 'COO'},
        {id: 1, img: 'Bill.png', name: 'John peter', type: 'COO'},
        {id: 2, img: 'Claudia.png', name: 'John peter', type: 'COO'},
        {id: 3, img: 'Avatar.png', name: 'John peter', type: 'COO'}
      ],
      activeScreen: false,
      indexActive: 0
    }
  },
  methods: {
    resizeWindow() {
      this.activeScreen = window.innerWidth >= 768;
    },
    changeActiveItem(indexActive) {
      this.indexActive = indexActive
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeWindow)
  },
  created() {
    this.resizeWindow();
  }
}
</script>

<style scoped lang="scss">

.team-screen-container {
  display: flex;
  max-width: 1294px;
  padding: 0 15px;
  margin: 0 auto;
  flex-direction: column;

  .title {
    text-align: left;
    margin: 148px 0 53px;
  }

  .team-container {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 80px;

      .team-content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 295px;
        height: 253px;
        margin: 14px 14px 14px 7px;
        padding: 35px 86px 30px;
        background-color: var(--background-brown-color);
        border-radius: 20px;
    }
  }
}

@media (max-width: 768px) {
  .team-screen-container {
    .team-container {
      align-items: center;
      flex-direction: column;

      .switch {
        margin-top: 30px;
      }
    }
  }
}

</style>