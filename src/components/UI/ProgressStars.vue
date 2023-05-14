<script>
export default {
  name: "progress-stars",
};
</script>
<script setup>
import { ref } from "vue";

const props = defineProps({ points: Number, k: Number });
const someStar = (max) => (props.points >= max ? true : false);
const stars = ref([
  {
    id: 1,
    isAchieved: someStar(25),
  },
  {
    id: 2,
    isAchieved: someStar(50),
  },
  {
    id: 3,
    isAchieved: someStar(100),
  },
  {
    id: 4,
    isAchieved: someStar(200),
  },
  {
    id: 5,
    isAchieved: someStar(500),
  },
]);
</script>
<template>
  <div :key="k" :class="$style.container">
    <div :class="$style.progress__stars">
      <div
        v-for="star in stars"
        :key="star.id"
        :class="
          star.isAchieved ? $style.progress_star_active : $style.progress_star
        "
      >
        <img src="../../assets/star.svg" :class="$style.star_img" alt="" />
      </div>
    </div>
    <div
      :class="
        points >= 1000 ? $style.progress_last.active : $style.progress_last
      "
    >
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
  .progress_star_active {
    img {
      filter: blur(4px);
    }
  }
}
</style>
