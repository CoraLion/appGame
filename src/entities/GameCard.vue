<template>
  <div class="card-game">
    <div class="image-game">
      <img :src="getUrlHome(gameCard.img)" alt="game">
    </div>
    <div class="text-game">
      <img class="burn" :src="getUrlHome('burn.svg')" alt="burn"/>
      {{gameCard.follower}} Followers
    </div>
  </div>
</template>

<script>

export default {
  name: "GameCard",
  props: {
    gameCard: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped lang="scss">

.card-game {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 255px;
  max-height: 343px;
  margin: 15px 20px;

  .image-game {
    position: relative;
    width: 251px;
    height: 277px;
    border-radius: 20px;
    overflow: hidden;
    text-align: center;
    margin-bottom: 25px;
    transition: all .5s;

    img {
      width: 100%;
      height: 100%;
    }

    &:before {
      content: '';
      position: absolute;
      height:100%;
      width: 100%;
      left: 0;
      bottom: 0;
      z-index: 1;
      background: linear-gradient(rgba(1,1,1,0.24) -15.71%, #0c0a08 99.57%) 0 0/cover no-repeat;
      transition: all .5s;
    }

    &:hover {
      cursor: pointer;
    }

    &:hover:before {
      opacity: 0;
    }

  }

  .text-game {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Rubik-Medium', sans-serif;
    font-size: 22px;

    .burn {
      margin: 9px;
    }
  }
}

</style>