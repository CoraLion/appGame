<template>
  <div class="video-player-container">
    <div class="video-player">
      <video class="video" :src="getUrlVideo(video)"></video>
      <img @click="onPlay" class="button_pause"
           :src="getUrlVideo('play.svg')" alt=""
           :class="startVideo === false ? 'active' : ''">
      <div @click="onPlay" class="color_pause"
           :class="startVideo === false ? 'active' : ''"/>
    </div>
    <div class="controller-container">
      <div class="play-and-pause">
        <img
            @click="onPlay"
            class="button-container play"
            :src="getUrlVideo('play.svg')"
            alt=""
            v-if="startVideo">
        <img
            @click="onPlay"
            class="button-container pause"
            :src="getUrlVideo('pause.svg')"
            alt="" v-if="!startVideo">
      </div>
      <div class="slider-container">
        <input class="styled-slider slider-progress" type="range">
      </div>
      <div class="time-container">
        {{currentTimeMinutes}}:{{currentTimeSeconds}}
      </div>
    </div>
  </div>
</template>

<script>
import reusedCode from "@/mixins/reusedCode";
import "@/assets/style/inputVideo.scss"
export default {
  name: "VideoPlayer",
  props: {
    video: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      startVideo: true,
      currentTimeMinutes: '00',
      currentTimeSeconds: '00',
      videoFeature: '',
      progressTimer: 0
    }
  },
  mixins: [reusedCode],
  methods: {
    onPlay() {
      if(this.videoFeature.paused) {
        this.videoFeature.play();
        this.startVideo = false
      } else {
        this.videoFeature.pause();
        this.startVideo = true
      }
    },
    timer() {
      this.progressTimer.value = (this.videoFeature.currentTime / this.videoFeature.duration) * 100;
      let minutes = Math.floor((this.videoFeature.currentTime / 60))
      let seconds = Math.floor((this.videoFeature.currentTime % 60))
      if (minutes < 10) {
        this.currentTimeMinutes = 0 + String(minutes)
      } else {
        this.currentTimeMinutes = minutes
      }
      if (seconds < 10) {
        this.currentTimeSeconds = 0 + String(seconds)
      } else {
        this.currentTimeSeconds = seconds
      }
    },
    changeTimer() {
      if(this.videoFeature.paused) {
        this.changeTime()
      } else {
        this.videoFeature.pause();
        this.changeTime()
        setTimeout(() => {
          this.videoFeature.play();
        },500)
      }
    },
    changeTime() {
      this.videoFeature.currentTime = (this.progressTimer.value * this.videoFeature.duration) / 100
    }
  },
  mounted() {
    this.videoFeature = document.querySelector('.video');
    this.progressTimer = document.querySelector('.styled-slider')
    this.videoFeature.addEventListener('timeupdate', this.timer)
    this.progressTimer.value = 0;
    this.progressTimer.addEventListener('change', this.changeTimer)
  },
  unmounted() {
    this.videoFeature.removeEventListener('timeupdate', this.timer)
    this.progressTimer.removeEventListener('change', this.changeTimer)
  },
  created() {
  }
}
</script>

<style scoped lang="scss">

.video-player-container {
  .video-player {
    display: flex;
    justify-content: center;
    max-width: 640px;
    max-height: 360px;
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
    overflow: hidden;
    border-radius: 16px 16px 0 0;

    .color_pause {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 2;
      opacity: 1;
      background: rgba(47, 48, 53, 0.5);
      transition: opacity .2s ease-in;
    }


    .button_pause {
      position: absolute;
      overflow: auto;
      margin: auto;
      opacity: 1;
      top: 0; left: 0; bottom: 0; right: 0;
      z-index: 3;
      transition: opacity .2s ease-in;
    }

    .active {
      opacity: 0;
    }
  }

  .controller-container {
    border-radius: 0 0 16px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 640px;
    width: 100%;
    background-color: black;
    padding: 10px;

    .play-and-pause {
      display: flex;
      align-items: center;
      margin-right: 20px;
      img {
        width: 40px;
        height: 40px;
      }

      &:hover {
        cursor: pointer;
      }
    }

    .slider-container {
     width: 480px;
      margin-right: 20px;
    }

    .time-container {
      max-width: 60px;
      width: 100%;
    }
  }
}

  @media (max-width: 768px) {
    .video-player-container {
      .video-player {
        max-width: 500px;
        max-height: 280px;
      }

      .controller-container {
        max-width: 500px;
      }
    }
  }

  @media (max-width: 480px) {
    .video-player-container {
      .video-player {
        max-width: 400px;
        max-height: 230px;
      }

      .controller-container {
        max-width: 400px;
      }
    }
  }
</style>