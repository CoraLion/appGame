<template>
  <div class="feedback-container">
     <div class="all-name">
      <div class="input containerName">
        <span class="title">First Name</span>
        <input class="holder" v-model="messageAllObject.firstName" type="text" name="text">
      </div>
      <div class="input">
        <span class="title">Second Name</span>
        <input class="holder" v-model="messageAllObject.secondName" type="text" name="text">
      </div>
     </div>
    <div class="input containerEmail">
      <span class="title">Email Address</span>
      <input class="holder" v-model="messageAllObject.email" type="text" name="text">
    </div>
    <div class="input containerMessage">
      <span class="title">Message</span>
      <textarea class="holder inputMessage" v-model="messageAllObject.message" name="text"/>
    </div>
    <button-radius :path-url="null" class="button-submit" @click="getMessage">Get in touch</button-radius>
  </div>
</template>

<script>
import ButtonRadius from "@/shared/ButtonRadius.vue";

export default {
  name: "FeedbackForm",
  components: {ButtonRadius},
  data() {
    return {
      messageAllObject: {
        firstName: '',
        secondName: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    getMessage() {
      if(this.messageAllObject.firstName !== '' && this.messageAllObject.secondName !== '' && this.messageAllObject.email !== '' && this.messageAllObject.message !== '') {
        let message = JSON.parse(JSON.stringify(this.messageAllObject));
        console.log(message)
        this.messageAllObject.firstName  = ''
        this.messageAllObject.secondName  = ''
        this.messageAllObject.email = ''
        this.messageAllObject.message = ''
      } else {
        alert('Input text')
      }
    }
  },
}
</script>

<style scoped lang="scss">
  .feedback-container {
    display: flex;
    flex-direction: column;
    max-width: 671px;
    width: 100%;

    .all-name {
      display: flex;
      flex-direction: row;
      max-width: 671px;
    }

    .title {
      display: flex;
      text-align: left;
      font-family: 'Poppins-Medium', sans-serif;
      line-height: 24.56px;
      font-size: 14px;
      letter-spacing: -0.3px;
      color: #4F4F4F;
      margin-bottom: 6px;
    }

    .input {
      text-align: left;
      max-width: 671px;
      width: 100%;

      &.containerName {
        margin-right: 20px;
      }

      &.containerEmail {
        margin: 20px 0;
      }

      &.containerMessage {
        margin-bottom: 51px;
      }
    }

    .holder {
      display: flex;
      background-color: rgba(255, 255, 255, 0.07);
      padding: 8px;
      color: var(--white);
      border: 0.6px solid var(--light-grey);
      border-radius: 9px;
      max-width: 671px;
      width: 100%;
      min-height: 56px;

      &.inputMessage {
        min-height: 260px;
        resize: none;
      }
    }


    .button-submit {
      align-self: flex-end;
      max-width: 193px;
    }
  }
</style>