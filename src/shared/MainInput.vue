<template>
  <div class="input">
    <div class="input-text">
      <input type="text" name="text"
             v-model="text_input"
             :placeholder="placeholderInput"/>
    </div>
    <div class="input-button">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainInput",
  props: {
    placeholderInput: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      text_input: null
    }
  }
}
</script>

<style scoped lang="scss">
  .input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 14px;
    max-width: 386px;
    width: 100% ;
    border-radius: 8px;
    background-color: #FFFFFF;

    .input-text {
      padding: 8px 0;
      max-width: 234px;
      color: rgba(137, 137, 137, 1);
    }

    .input-button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
      max-width: 105px;
      width: 100%;
      min-height: 37px;
      border-radius: 8px;
      background-color: var(--main-orange-dark);

      &:hover {
        transition: all .5s;
        cursor: pointer;
        background-color: var(--main-orange-light);
      }
    }

  }

  @media (max-width: 1280px) {
    .input {
      min-width: 250px;
    }
  }
</style>