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
  const games = store.state.progress.stages[i].games[0];
  totalPoints.value += games.bestResult;
}

watch(totalPoints, (val) => Synchronization(val));
onMounted(() => {
  Synchronization(totalPoints.value);
});
</script>

<template>
  <main class="main">
    <h1>Your have: {{ totalPoints }} points</h1>
    <div class="progress-block">
      <progress
        :value="value"
        :max="max"
        class="progress"
        id="progress"
      ></progress>
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>    
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <div class="progress__numbers">
      <span class="progress__numbers--number">0</span>
      <span class="progress__numbers--number">{{
        totalPoints <= 25 ? totalPoints + "/25" : "25"
      }}</span>
      <span class="progress__numbers--number">{{
        totalPoints <= 50 && totalPoints > 25 ? totalPoints + "/50" : "50"
      }}</span>
      <span class="progress__numbers--number">{{
        totalPoints <= 100 && totalPoints > 50 ? totalPoints + "/100" : "100"
      }}</span>
      <span class="progress__numbers--number">{{
        totalPoints <= 200 && totalPoints > 100 ? totalPoints + "/200" : "200"
      }}</span>
      <span class="progress__numbers--number">{{
        totalPoints <= 500 && totalPoints > 200 ? totalPoints + "/500" : "500"
      }}</span>
      <span class="progress__numbers--number">{{
        totalPoints <= 1000 && totalPoints > 500
          ? totalPoints + "/1000"
          : "1000"
      }}</span>
    </div>
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
  justify-content: center;
  .progress-block {
    position: relative;
    height: 40px;
    margin: 0 auto;
    max-width: 900px;
    justify-content: center;
    text-align: center;
    .progress {
      position: absolute;
      width: 900px;
      max-width: 100%;
      height: 40px;
      overflow: hidden;
      outline: none;
      left: 0;
      border: none;
      border-radius: 30px;
      accent-color: #efefef;
      -webkit-appearance: none;
      appearance: none;
      filter: brightness(1.9);
    }
    .progress::-moz-progress-bar {
      background: blue;
      accent-color: #efefef;
      border-radius: 30px;
    }
    .progress::-webkit-progress-value {
      background: blue;
      accent-color: #efefef;
      border-radius: 30px;
      -webkit-appearance: none;
      appearance: none;
    }
    .lines {
      position: absolute;
      left: 0;
      height: 100%;
      display: flex;
      width: 100%;
      justify-content: space-between;
      .line {
        &:first-child,
        &:last-child {
          opacity: 0;
        }
        height: 100%;
        border-left: 1px solid gray;
        // width: 16.6666%;
        background: transparent;
      }
    }
  }
  .progress__numbers {
    display: flex;
    width: 100%;
    max-width: 900px;
    justify-content: space-between;
    margin: 0 auto;
    font-weight: 400px;
    color: rgb(152, 152, 152);
    span {
      display: block;
      text-align: center;
      transform: translateX(2px);
      &:first-child {
        transform: translateX(0px);
      }
    }
  }
  input {
    width: 55.9%;
    margin: 10px auto 0;
    padding: 4.2221px 20.2221px;
  }
}
</style>
