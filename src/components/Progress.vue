<script setup>
import { onMounted, ref } from "vue";
const value = ref(20);
const labelVideo = ref(0);
const video = ref("");

const handleTimeupdate = () => {
  console.log("Value changed");
  const percent = Math.floor(
    (1000 / video.value.duration) * video.value.currentTime
  );
  value.value = percent;
  labelVideo.value = percent;
};
</script>
<template>
  <main class="main">
    <!-- <progress class="progress" :value="value"  max="100"></progress> -->
    <progress
      :value="value"
      max="1000"
      class="progress"
      id="progress"
    ></progress>
    <label for="control-progress" :labelVideo="labelVideo" id="label">{{
      labelVideo
    }}</label>
    <p>
      <video
        id="control"
        class="video-player"
        ref="video"
        v-on:timeupdate="handleTimeupdate"
        src="../assets/(HiFiMov.co)_1000-second-countdown-timer.mp4"
        controls
      ></video>
    </p>
  </main>
</template>
<style lang="scss">
.main {
  width: 100%;
}
.progress::-moz-progress-bar {
  background: blue;
}
.progress {
  width: 900px;
  max-width: 100%;
  height: 40px;
  outline: none;
  padding: 0 20px;
  border: none;
  background: rgba(239, 239, 239, 0.6);
  border-radius: 30px;
}
#label {
  display: block;
}
.video-player {
  max-height: 24px;
  outline: none;
  border: none;
  content: "";
  color: transparent;
  -webkit-text-fill-color: transparent;
  width: 300px;
  border-radius: 20px;
  position: absolute;
  border: 0.2px solid black;
  clip: rect(auto, 290px, 4px, 10px);
  transform: translateX(-150px);
}
</style>
