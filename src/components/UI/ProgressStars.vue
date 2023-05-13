<script>
export default {
  name: "progress-stars",
};
</script>
<script setup>
const points = defineProps({ points: Number });
// Здесь короче будут условия
console.log(points);
</script>
<template>
  <div :class="$style.container">
    <div :class="$style.progress__stars">
      <div :class="$style.progress_star">
        <img src="../../assets/star.svg" :class="$style.star_img" alt="" />
      </div>
      <div :class="$style.progress_star">
        <img src="../../assets/star.svg" :class="$style.star_img" alt="" />
      </div>
      <div :class="$style.progress_star">
        <img src="../../assets/star.svg" :class="$style.star_img" alt="" />
      </div>
      <div :class="$style.progress_star">
        <img src="../../assets/star.svg" :class="$style.star_img" alt="" />
      </div>
      <div :class="$style.progress_star">
        <img src="../../assets/star.svg" :class="$style.star_img" alt="" />
      </div>
    </div>
    <div :class="$style.progress_last">
      <img src="../../assets/star.svg" :class="$style.star_img" alt="" />
    </div>
  </div>
</template>
<style module lang="scss" scoped>
.container {
  // width: 900px;
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  .progress_last {
    position: absolute;
    right: 0;
    @media (max-width: 500px) {
      bottom: 20%;
      img {
        width: 3.5vw;
        height: 3.5vw;
      }
    }
  }
}
.progress__stars {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  max-width: 762px;
  height: 25px;
  margin-left: auto;
  div {
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: left;
    width: 20%;
    &:first-child {
      img {
        // Logic with fill and stuff like that .
        transform: translateX(0);
      }
    }
    img {
      transform: translateX(-29%);
      @media (max-width: 500px) {
        width: 3.5vw;
        height: 3.5vw;
      }
    }
  }
}
</style>
