<template>
  <div class="user-content">
    <img class="user-command" :src="getUrlAbout(command.img)" alt="user"/>
    <span class="name-command">{{command.name}}</span>
    <span class="name-type">{{command.type}}</span>
  </div>
</template>

<script>

export default {
  name: "MemberTeamCard",
  props: {
    command: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped lang="scss">

.user-content {
  display: flex;
  flex-direction: column;
  position: absolute;

  .user-command {
    max-width: 117px;
    max-height: 117px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name-command {
    margin-bottom: 5px;
    font-family: 'Poppins-Medium', sans-serif;
    font-size: 19px;
  }
}

</style>