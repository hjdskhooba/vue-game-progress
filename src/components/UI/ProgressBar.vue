<script>
export default {
  name: "progress-bar",
};
</script>
<script setup>
import { onMounted, ref, watch } from "vue";
const props = defineProps({ totalPoints: Number });
const max = ref(1200);
const value = ref(0);
const synchronization = (points) => {
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
    alert("Something went wrong");
  }
};

watch(props, (val) => synchronization(val.totalPoints));
onMounted(() => {
  synchronization(props.totalPoints);
});
</script>
<template>
  <div :class="$style.progress_block">
    <progress
      :value="value"
      :max="max"
      :class="$style.progress"
      id="progress"
    ></progress>
    <div :class="$style.lines">
      <div :class="$style.line"></div>
      <div :class="$style.line"></div>
      <div :class="$style.line"></div>
      <div :class="$style.line"></div>
      <div :class="$style.line"></div>
      <div :class="$style.line"></div>
      <div :class="$style.line"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped module>
.progress_block {
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
</style>
