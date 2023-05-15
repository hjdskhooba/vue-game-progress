<script>
export default {
  name: "progress-nums",
};
</script>
<script setup>
const props = defineProps({ totalPoints: Number });
const calcPoints = (to, from) => {
  let ppoints = props.totalPoints;
  if (ppoints <= to && ppoints > from) {
    return ppoints + "/" + to;
  } else {
    return to;
  }
};
</script>
<template>
  <div :class="$style.progress__numbers">
    <span :class="$style.progress__numbers_number">0</span>
    <span :class="$style.progress__numbers_number">{{
      totalPoints <= 25 ? totalPoints + "/25" : 25
    }}</span>
    <span :class="$style.progress__numbers_number">{{
      calcPoints(50, 25)
    }}</span>
    <span :class="$style.progress__numbers_number">{{
      calcPoints(100, 50)
    }}</span>
    <span :class="$style.progress__numbers_number">{{
      calcPoints(200, 100)
    }}</span>
    <span :class="$style.progress__numbers_number">{{
      calcPoints(500, 200)
    }}</span>
    <span :class="$style.progress__numbers_number">{{
      calcPoints(1000, 500)
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
