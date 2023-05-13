<script setup>
import { mapGetters } from "@/utils/mapHelpers";
const { calculatedPoints } = mapGetters();
</script>

<template>
  <main :class="$style.main">
    <h1>Your have: {{ calculatedPoints }} points</h1>
    <progress-stars :points="calculatedPoints"></progress-stars>
    <progress-bar :totalPoints="calculatedPoints"></progress-bar>
    <progress-nums :totalPoints="calculatedPoints"></progress-nums>
    <edit-points-input v-model:value="calculatedPoints"></edit-points-input>
  </main>
</template>

<style lang="scss" module>
.main {
  width: 100%;
  justify-content: center;
}
</style>
