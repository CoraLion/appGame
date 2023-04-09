<template>
  <loading-tools/>
  <router-view/>
</template>

<script setup>
import '@/../../../testproject2/src/static/fonts.css'
import LoadingTools from "@/shared/LoadingTools.vue";
</script>

<style>

  :root {
    --black: #000000;
    --blue: #2351F5;
    --blue-hover: #1f46d2;
    --white: #FFFFFF;
    --grey: #DDDDDD;
    --light-grey: #CECECE;
    --dark-grey: #333333;
    --bold-text-color: #E87D0E;
    --name-page-color: #E47500;
    --background-brown-color: #1C140F;
    --background-black-color: #070707;
    --background-total-brown-color: #0F0901;
    --backgroud-color: linear-gradient(179.5deg, #010101 -15.71%, #1A0E01 99.57%);
    --button-gradient: linear-gradient(92.48deg, #FA8305 2.08%, #FB9E3C 117.25%);
    --button-gradient-hover: linear-gradient(92.48deg, #FB9E3C 117.25%, #FA8305 2.08%);
    --main-orange-light: #FA9021;
    --main-orange-dark: #DC7000;
    --button-grey: rgba(255, 255, 255, 0.11);
    --button-grey-hover: rgba(255, 255, 255, 0.12);
  }

  #app {
    font-family: 'Poppins-Regular', sans-serif;
    font-size: 16px;
    text-align: center;
    max-width: 100%;
    min-height: 100%;
    overflow: auto;
    color: rgba(255, 255, 255, 1);
    line-height: 24px;
  }
  main {
    min-width: 100%;
  }

  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--backgroud-color);
    min-height: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    overflow-x:hidden;
  }

  * {
    box-sizing: border-box;
  }

  input,
  button,
  textarea,
  select, p {
    outline: 0;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: rgba(1,1,1,0);
    font-family: 'Poppins-Light', sans-serif;
    font-size: 13px;
    line-height: 19.5px;
  }

  img {
    box-sizing: border-box;
    object-fit: cover;
    object-position: center;
  }
  ul,
  ol {
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(208, 190, 190, 0);
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>