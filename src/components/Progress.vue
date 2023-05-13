<script setup>
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
const max = ref(1200);
const totalPoints = ref(0);
const value = ref(0);
const changeTotalPoints = (e) => {
  totalPoints.value = +e.target.value;
};

const Synchronization = (points) => {
  if (points <= 50) {
    max.value = 150;
    value.value = points;
  } else if (points <= 100) {
    max.value = 300;
    value.value = points + 50;
  } else if (points <= 200) {
    max.value = 600;
    value.value = 300 + points - 100;
  } else if (points <= 500) {
    max.value = 1800;
    value.value = 1200 + (points - 200);
  } else if (points <= 1000) {
    max.value = 3000;
    value.value = 2500 + (points - 500);
  } else {
    alert("Congratulations! you got the maximum score");
  }
};
const store = useStore();
for (let i = 0; i < store.state.progress.stages.length; i++) {
  //   store.state.progress.stages[0].games[0].bestResult
  const games = store.state.progress.stages[i].games[0];
  //   for (let j = 0; j < ; j++) {
  //   totalPoints.value = ;
  totalPoints.value += games.bestResult;
  //   }
}

watch(totalPoints, (val) => Synchronization(val));
onMounted(() => {
  Synchronization(totalPoints.value);
});
</script>

<template>
  <main class="main">
    <h1>Your have: {{ totalPoints }} points</h1>
    <progress
      :value="value"
      :max="max"
      class="progress"
      id="progress"
    ></progress>
    <p>
      <input
        type="number"
        @input="changeTotalPoints"
        placeholder="Enter fake points"
      />
    </p>
  </main>
</template>

<style lang="scss">
.main {
  width: 100%;
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
  input {
    width: 55.9%;
    margin: 10px auto 0;
    padding: 4.2221px 20.2221px;
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
}
</style>
