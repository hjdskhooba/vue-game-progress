<script>
export default {
  name: "progress-nums",
};
</script>
<script setup>
const props = defineProps({ totalPoints: Number });
// Здесь нужен computed !
</script>
<template>
  <div :class="$style.progress__numbers">
    <span :class="$style.progress__numbers_number">0</span>
    <span :class="$style.progress__numbers_number">{{
      totalPoints <= 25 ? totalPoints + "/25" : "25"
    }}</span>
    <!-- Здесь еще нужно поработать, сократить код -->
    <span :class="$style.progress__numbers_number">{{
      totalPoints <= 50 && totalPoints > 25 ? totalPoints + "/50" : "50"
    }}</span>
    <span :class="$style.progress__numbers_number">{{
      totalPoints <= 100 && totalPoints > 50 ? totalPoints + "/100" : "100"
    }}</span>
    <span :class="$style.progress__numbers_number">{{
      totalPoints <= 200 && totalPoints > 100 ? totalPoints + "/200" : "200"
    }}</span>
    <span :class="$style.progress__numbers_number">{{
      totalPoints <= 500 && totalPoints > 200 ? totalPoints + "/500" : "500"
    }}</span>
    <span :class="$style.progress__numbers_number">{{
      totalPoints <= 1000 && totalPoints > 500 ? totalPoints + "/1000" : "1000"
    }}</span>
  </div>
</template>
<style lang="scss" scoped module>
.progress__numbers {
  display: flex;
  width: 100%;
  max-width: 900px;
  justify-content: space-between;
  margin: 0 auto;
  font-weight: 400px;
  color: rgb(152, 152, 152);
  &_number {
    display: block;
    text-align: center;
    transform: translateX(2px);
    &:first-child {
      transform: translateX(0px);
    }
  }
}
</style>
