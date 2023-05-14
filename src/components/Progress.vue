<script setup>
import { mapGetters } from "@/utils/mapHelpers";
import { ref, watch } from "vue";
const { calculatedPoints } = mapGetters();
const inputValue = ref(0);
const points = ref(calculatedPoints.value);
watch(inputValue, (val) => (points.value = val));
const rerender = ref(0);
const changePoints = (event) => {
  inputValue.value = event;
  rerender.value += 1;
};
</script>
<template>
  <main :class="$style.main">
    <h1>Your have: {{ points }} points</h1>
    <progress-stars :k="rerender" :points="points"></progress-stars>
    <progress-bar :totalPoints="points"></progress-bar>
    <progress-nums :totalPoints="points"></progress-nums>
    <edit-points-input @upd="changePoints"></edit-points-input>
  </main>
</template>

<style lang="scss" module>
.main {
  width: 100%;
  justify-content: center;
  padding: 0 20px 0;
  z-index: 1000;
  h1 {
    position: relative;
    z-index: 100;
  }
}
</style>
