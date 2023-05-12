<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue";
const inputValue = ref(200);
const max = ref(1200);

const bestResult = ref(600);
const value = ref(bestResult.value);
if (bestResult.value <= 50) {
  max.value = 150;
} else if (bestResult.value <= 100) {
  max.value = 300;
  value.value = bestResult.value * 1.5;
} else if (bestResult.value <= 200) {
  max.value = 800;
  value.value = 400 + (bestResult.value - 67);
} else if (bestResult.value <= 500){
    max.value = 1800
    value.value = 1200 + (bestResult.value - 100) 
} 
// Последняя.
else {
    max.value = 1800
    value.value = 1400 + (bestResult.value - 550) 
}
</script>
<template>
  <main class="main">
    <progress
      :value="value"
      :max="max"
      class="progress"
      id="progress"
    ></progress>
    <div class="proverka">
      <div></div>
    </div>
    <p>
      <input
        type="range"
        :value="inputValue"
        @input="addPoints"
        max="1200"
        aria-label="idk"
      />
    </p>
  </main>
</template>
<style lang="scss">
.main {
  width: 100%;
}
.proverka {
  width: 900px;
  height: 20px;
  background-color: red;
  margin: 0 auto;
  box-sizing: content-box;
  div {
    width: 66.6666%;
    height: 100%;
    background-color: blue;
  }
}
.progress::-moz-progress-bar {
  background: blue;
}
.progress {
  width: 900px;
  max-width: 100%;
  height: 40px;
  outline: none;
  //   padding: 0 20px;
  border: none;
  background: rgba(239, 239, 239, 0.6);
  border-radius: 30px;
}
#label {
  display: block;
}
input[type="range"] {
  width: 55.9%;
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
